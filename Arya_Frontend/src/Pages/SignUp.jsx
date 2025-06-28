import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import '../style/signUp.scss'
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Base_Url from '../utils/config';
import { useEffect } from 'react';
import { use } from 'react';

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [create, setCreate] = useState({
        userName: '',
        email: '',
        number: '',
        password: ''
    })

    const valide = () => {
        const newErrors = {}

        if (!create.userName.trim()) {
            newErrors.userName = "Please fill your full name"
        }
        if (!create.email.trim()) {
            newErrors.email = "Please fill your Email"
        } else if (!/\S+@\S+\.\S+/.test(create.email)) {
            newErrors.email = "Email is invalid"
        }
        if (!create.number.trim()) {
            newErrors.number = "Please fill the number"
        }
        else if (create.number.length !== 10) {
            newErrors.number = "Number must be 10 digits"

        }
        if (!create.password.trim()) {
            newErrors.password = "Please fill your password"
        } else if (create.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        return newErrors
    }


    const handleInput = (e) => {
        const { value, name } = e.target;
        setCreate(prev => ({ ...prev, [name]: value }))
    }

    const HandleSignUp = async (e) => {
        e.preventDefault()

        const validationError = valide()
        setError(validationError)

        if (!create.userName || !create.email || !create.number || !create.password) {
            alert("Please fill all the fields before submitting.");
            return;
        }

        try {
            const response = await fetch(`${Base_Url}/user-profile/user-new-account`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(create)
            })
            const data = await response.json()
            navigate('/login')

        } catch (error) {
            console.log("Netwrok issue", error);
        }
    }



    return (
        <>
            <Container>
                <div className="login_container">
                    <div className="login_content">
                        <h2>Create Account</h2>
                        <Form >
                            <div className="login_inputs">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control onChange={handleInput} type='text' name='userName' placeholder='Enter Your Name' />
                                {error.userName && <p style={{ color: 'red' }}>{error.userName}</p>}
                            </div>

                            <div className="login_inputs">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleInput} name='email' type='email' placeholder='Enter Your Name' />
                                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                            </div>

                            <div className="login_inputs">
                                <Form.Label>Number</Form.Label>
                                <Form.Control onChange={handleInput} type='number' name='number' placeholder='Enter Your Name' />
                                {error.number && <p style={{ color: 'red' }}>{error.number}</p>}
                            </div>

                            <div className="login_inputs">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleInput} type='password' name='password' placeholder='Enter Your Name' />
                                {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                            </div>
                            <div className="switch_sign">
                                <p>Don't have an account? <span className="sign_up_link"><Link to={'/login'}>Log in</Link></span></p>
                            </div>
                            <div className="login_btn">
                                <button onClick={HandleSignUp} className='main_button'>Sign Up</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp