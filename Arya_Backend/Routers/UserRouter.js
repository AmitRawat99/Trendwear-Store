import UsersProfile from "../models/UserModel.js";
import { CreateAccount, LoginAccount, Authorize , findAllAccounts } from '../controllers/UserController.js'
import express from 'express'

const Router = express.Router()

Router.post('/user-new-account', CreateAccount)
Router.post('/user-login' ,LoginAccount)
Router.get('/user-accounts' , findAllAccounts)
Router.get('/profile', Authorize)

export default Router;