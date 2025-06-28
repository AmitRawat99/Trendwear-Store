import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import '../style/login.scss'
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Base_Url from '../utils/config';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../Context/UserProvider';

function Login() {
    const { user, setuser } = useContext(UserContext)
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleError = () => {
        const newErrors = {}

        if (!userData.userName.trim()) {
            newErrors.userName = "Please fill username"
        }

        if (!userData.email.trim()) {
            newErrors.email = "please fill the email"
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!userData.password.trim()) {
            newErrors.password = "please fill the password"
        } else if (userData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        return newErrors
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData((prev => ({ ...prev, [name]: value })))
    }

    // useEffect(() => {
    //     console.log("userdata", userData);
    // }, [userData])

    const handleLogin = async (e) => {
        e.preventDefault()
        const validationForm = handleError()
        setErrors(validationForm)


        if (userData.userName == "" || userData.email == "" || userData.password == "") {
            alert("All Fields Are Requred")
            console.log("fill all fields ");
        }

        try {
            const response = await fetch(`${Base_Url}/user-profile/user-login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(userData)
            })

            const data = await response.json()

            if (response.ok && data.success) {
                const userId = data.data;
                console.log(userId, "user id");
                localStorage.setItem("profile", JSON.stringify(userId))
                navigate('/')
                setuser(userId)
            }


        } catch (error) {
            console.log("Network issue", error)
        }
    }



    return (
        <>
            <Container>
                <div className="login_container">
                    <div className="login_content">
                        <h2>Login</h2>
                        <Form>
                            <div className="login_inputs">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control onChange={handleInput} name='userName' placeholder='Enter Your Name' />
                                {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
                            </div>
                            <div className="login_inputs">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleInput} name='email' placeholder='Enter Your Email' />
                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                            </div>
                            <div className="login_inputs">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleInput} type='password' name='password' placeholder='Enter Your Name' />
                                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                            </div>
                            <div className="switch_sign">
                                <p>Don't have an account? <span className="sign_up_link"><Link to={'/register'}>Sign up</Link></span></p>
                            </div>
                            <div className="login_btn">
                                <button onClick={handleLogin} className='main_button'>Login</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login