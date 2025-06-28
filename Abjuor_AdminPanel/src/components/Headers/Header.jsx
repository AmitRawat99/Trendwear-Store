import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo/logo.png'
import user from '../../assets/img/logo/user.png'
import '../../style/Header.scss'


function Header() {
    const userName = localStorage.getItem("userData")
    const userData = userName ? JSON.parse(userName) : null;

    return (
        <>
            <Container fluid >
                <div className="header_container">
                    <div className="logo-admin">
                        {/* <img src={logo} alt="" /> */}
                        <h2>Admin Panel</h2>
                    </div>
                    <div className="user-menu">
                        <div className="user-profile">
                            <img src={user} alt="User" />
                            <h1>Username</h1>
                        </div>
                        <div className="submenu">
                            <ul>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header