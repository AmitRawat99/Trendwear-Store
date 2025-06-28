import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Dashboard from '../components/Dashboard/Dashboard'
import Product_Details from '../components/Sections/Product_Details'
import Kids from '../Pages/Kids'
import Cart from '../Pages/Cart'
import Shop from '../Pages/Shop'


function PageRouter() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/dashbord/:slug' element={<Dashboard />} />
                    <Route path="/product/details/:slug/:id" element={<Product_Details />} />
                </Routes>
            </Layout>
        </>
    )
}

export default PageRouter