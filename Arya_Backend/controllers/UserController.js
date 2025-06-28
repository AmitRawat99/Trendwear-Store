import express from 'express';
import UserModel from '../models/UserModel.js'
import bcrypt, { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


// create account 


export const CreateAccount = async (req, res) => {
    try {
        const { userName, password, email, number } = req.body;

        if (!userName || !password || !email || !number) {
            console.log("all fields are required")
        }

        const userId = Math.floor(Math.random() * 900000).toString()

        const existing = await UserModel.findOne({ where: { email } })

        if (existing) {
            return res.status(400).json({
                message: "That user already exist with this email"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await new UserModel({
            userId,
            userName,
            email,
            number,
            password: hashPassword,
        })

        await newUser.save()

        res.status(201).json({
            success: true,
            message: "User Register Successfully",
            newUser: newUser
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "somethink went wrong",
        })
    }

}


// login account 


export const LoginAccount = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required. Please fill in all the fields before submitting."
            });
        }
        const existing = await UserModel.findOne({ where: { email: email } })

        if (!existing) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const isMatch = await bcrypt.compare(password, existing.password)

        if (!isMatch) {
            return res.status(404).json({
                message: "email & password wrong"
            })
        }

        const token = jwt.sign(
            { id: existing.id, email: existing.email, userId: existing.userId },
            process.env.SECRET_KEY,
            { expiresIn: '1d' })



        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "Strict",
        })

        const loginUser = {
            id: existing.id,
            userId: existing.userId,
            userName: existing.userName,
            email: existing.email,
        }

        res.status(201).json({
            success: true,
            message: "User Login Successfully",
            data: loginUser
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Invlide Email & Password",
            error: error.message
        })
    }
}


// user autheorize 


export const Authorize = (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        

        if (!token) {
            return res.status(401).json({
                message: "You are not authorized. No token provided."
            });
        }
        console.log(token);
        

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        return next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Invalid token"
        });
    }
};


// find user accounts 


export const findAllAccounts = async (req, res) => {
    try {
        const findAllUserAccounts = await UserModel.findAll()

        if (!findAllUserAccounts || findAllUserAccounts.length === 0) {
            res.status(401).json({
                success: false,
                message: "not found the accounts successfully"
            })
        }

        res.status(201).json({
            success: true,
            message: "find all accounts successfully",
            Useraccounts: findAllUserAccounts
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "somethink went wrong",
            error: error.message
        })
    }
}