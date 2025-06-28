import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../style/Header.scss'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Base_Url from '../../utils/config';
import { UserContext } from '../../Context/UserProvider';
import { useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";


function SearchBar({ SearchBtn, searchValue, setSearchValue, toggleBnt, isOpneMobile }) {

    const { user, setuser, logOutUser } = useContext(UserContext)

    return (
        <>
            <Container fluid className='container-box'>
                <Container>
                    <div className="header_Container flex justify-between items-center">
                        <div className="Header_left_container flex items-center gap-3">
                            <div className="header_logo">
                                <h1><Link to={'/'}>Arya Bazar</Link></h1>
                            </div>
                            <div className="search_bars_icon flex items-center gap-2">
                                <input  onChange={(e) => setSearchValue(e.target.value)} type="search" placeholder='Search For Product , Brands and More' />
                                <IoSearchOutline onClick={SearchBtn} />
                            </div>
                        </div>

                        <div className="Header_right_container flex items-center gap-3 ">
                            {
                                user ? (
                                    <div className="user_Account ">
                                        <FaRegUserCircle />
                                        <li className='list-none'><Link to={'/profile'}>{user.userName}</Link></li>
                                        <ul className="register_login">
                                            <li onClick={logOutUser}><Link >Logout</Link></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="user_Account ">
                                        <FaRegUserCircle />
                                        <li className='list-none'>Account</li>
                                        <ul className="register_login">
                                            <li><Link to={'/login'}>Login</Link></li>
                                            <li><Link to={'/register'}>Register</Link></li>
                                        </ul>
                                    </div>

                                )
                            }
                            <div className="add_to_cart flex justify-center items-center ">
                                <div className="add_to_cart_btn flex gap-2 items-center">
                                    <FaShoppingCart />
                                    <li><Link to={'/cart'}>Cart</Link></li>
                                </div>
                            </div>
                        </div>

                        <div className="menu_icons" onClick={() => toggleBnt()}>
                            {isOpneMobile ? (
                                <FaXmark />
                            ) : (
                                <RiMenu3Fill />
                            )}
                        </div>

                    </div>
                </Container>
            </Container>
        </>
    )
}

export default SearchBar