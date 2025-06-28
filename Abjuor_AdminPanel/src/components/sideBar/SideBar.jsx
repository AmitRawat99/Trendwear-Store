import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../style/dashboard.scss'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";



function SideBar() {

    const [open, setOpen] = useState(true)

    const CheckOpen = () => {
        setOpen(!open)
    }

    return (
        <Container fluid>
            <div className="aside-container">
                <Col md={12}>
                    <div className="aside-container-details">
                        <li>

                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `aside-icons d-flex align-items-center mb-3 ${isActive ? "activeNav" : "nonActive"}`
                                }>
                                <IoHomeSharp className="me-2" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <ul className="submenus" >
                            <li className='mainbox' onClick={CheckOpen}>Arya Bazaar <IoMdArrowDropdown /></li>

                            <div className={`${open ? "open" : "nonOpne"}`}>
                                <li>

                                    <NavLink
                                        to="/all-product-list"
                                        className={({ isActive }) =>
                                            `aside-icons d-flex align-items-center mb-3 ${isActive ? "activeNav" : "nonActive"}`
                                        }>
                                        <IoHomeSharp className="me-2" />
                                        <span>All Products</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/user-accounts"
                                        className={({ isActive }) =>
                                            `aside-icons d-flex align-items-center mb-3 ${isActive ? "activeNav" : "nonActive"}`
                                        }>
                                        <FaUser className="me-2" />
                                        <span>User Accounts</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/orders"
                                        className={({ isActive }) =>
                                            `aside-icons d-flex align-items-center mb-3 ${isActive ? "activeNav" : "nonActive"}`
                                        }>
                                        <FaShoppingCart className="me-2" />
                                        <span>Orders</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/add-products"
                                        className={({ isActive }) =>
                                            `aside-icons d-flex align-items-center mb-3 ${isActive ? "activeNav" : "nonActive"}`
                                        }>
                                        <IoIosAddCircle className="me-2" />
                                        <span>Add Product</span>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>


                    </div>
                </Col>
            </div>
        </Container >
    );
}

export default SideBar;
