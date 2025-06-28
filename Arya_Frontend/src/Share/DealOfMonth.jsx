import React, { useEffect, useState } from 'react'
import '../style/DealofMonth.scss'
import { Col, Container, Row } from 'react-bootstrap'
import bannerHome from '../assets/Images/Banner/Home_section_banner.png'
import { FaStar } from "react-icons/fa";
import ProductImg1 from '../assets/Images/DealOfMonth/1 (1).webp'
import ProductImg2 from '../assets/Images/DealOfMonth/1 (2).webp'
import ProductImg3 from '../assets/Images/DealOfMonth/1 (3).webp'
import ProductImg4 from '../assets/Images/DealOfMonth/1 (4).webp'
import ProductImg5 from '../assets/Images/DealOfMonth/1 (5).webp'
import ProductImg6 from '../assets/Images/DealOfMonth/1 (6).webp'
import ProductImg7 from '../assets/Images/DealOfMonth/1 (7).webp'
import ProductImg8 from '../assets/Images/DealOfMonth/1 (8).webp'

function DealOfMonth() {


    const DealProducts = [
        {
            productImg: ProductImg1,
            productName: 'Women Cotton Blend Kurta Pant Attached Dupatta Set',
            productCategory: "Women's Ethnic Wear",
            productRating: 4.5,
            productPrice: 1299,
            productOldPrice: 1499,
            productDiscount: 13
        },
        {
            productImg: ProductImg2,
            productName: "LITWAY Boys' Casual T-shirt and Shorts Set",
            productCategory: 'Kids Wear',
            productRating: 4.0,
            productPrice: 899,
            productOldPrice: 1199,
            productDiscount: 25
        },
        {
            productImg: ProductImg3,
            productName: "Men Regular Fit Self Design Spread Collar Casual Shirt",
            productCategory: 'Kids Wear',
            productRating: 4.2,
            productPrice: 1099,
            productOldPrice: 1399,
            productDiscount: 21
        },
        {
            productImg: ProductImg4,
            productName: "MD Enterprise Girls' Wedding Kurta Palazzo Set",
            productCategory: 'Kids Wear',
            productRating: 4.7,
            productPrice: 1399,
            productOldPrice: 1599,
            productDiscount: 12
        },
        {
            productImg: ProductImg5,
            productName: "AVOVU Girls' Party/Festive Sweatshirt & Sweatpant Set",
            productCategory: 'Kids Wear',
            productRating: 4.3,
            productPrice: 1199,
            productOldPrice: 1499,
            productDiscount: 20
        },
        {
            productImg: ProductImg6,
            productName: 'Organic Cotton Crew',
            productCategory: 'Basic T‑Shirt',
            productRating: 4.1,
            productPrice: 999,
            productOldPrice: 1299,
            productDiscount: 23
        },
        {
            productImg: ProductImg7,
            productName: 'Pocket Tee Classic',
            productCategory: 'Pocket T‑Shirt',
            productColor: 'Heather Grey',
            productRating: 4.0,
            productPrice: 899,
            productOldPrice: 1199,
            productDiscount: 25
        },
        {
            productImg: ProductImg8,
            productName: 'Men Colorblock Round Neck Pure Cotton Light Blue T-Shirt',
            productCategory: "Men's Wear",
            productColor: 'Sky Blue/White',
            productRating: 4.4,
            productPrice: 1299,
            productOldPrice: 1499,
            productDiscount: 13
        }
    ];


    const [timer, setTimer] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            const NewData = new Date()
            setTimer(NewData)
            clearInterval(interval)
        }, 1000);
    }, [timer])

    return (
        <>
            <Container style={{ marginTop: "40px" }}>
                <Row>
                    <Col lg={4}>
                        <div className="deal_container">
                            <div className="deal-banner">
                                <div className="deal-content">
                                    <img src={bannerHome} alt="" />
                                    <div className="deal-details">
                                        <div className="deal-alert ">
                                            <h3>Hot This Month</h3>
                                            <h1>Save an extra </h1>
                                            <h2>$15 per order</h2>
                                        </div>
                                        <div className="offer_product flex items-center justify-between">
                                            <div className="offer_timer">
                                                <p>Days: <span>{timer.getDay()}</span> </p>
                                            </div>
                                            <div className="offer_timer">
                                                <p>Hours: <span>{timer.getHours()}</span> </p>
                                            </div>
                                            <div className="offer_timer">
                                                <p>Mintus: <span>{timer.getMinutes()}</span> </p>
                                            </div>
                                            <div className="offer_timer">
                                                <p>Seconds: <span>{timer.getSeconds()}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="deal_Products">
                            <div className="deal_product_title">
                                <h2>Deal Of The Month</h2>
                            </div>
                            {
                                <Row>
                                    {
                                        DealProducts.map((item, idx) => {
                                            return (
                                                <Col lg={3} md={4} sm={6} key={idx}>
                                                    <div className="all_product_content">
                                                        <div className="product_details">
                                                            <img src={item.productImg} alt="product" />
                                                            <div className="produce-name">
                                                                <h1>{item.productName}</h1>
                                                                <div className="proudct_details_deply">
                                                                    <div className="rating">
                                                                        {Array.from({ length: item.productRating }).map((_, idx) => (
                                                                            <span key={idx}><FaStar /></span>
                                                                        ))}
                                                                    </div>
                                                                    <div className="discount ">
                                                                        <h3>Rs : {item.productPrice}<sup>Rs : {item.productOldPrice}</sup></h3>
                                                                        <p>{item.productDiscount}% Discount</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            }
                            <Row>
                            </Row>
                        </div>
                    </Col>
                </Row >
            </Container >
        </>
    )
}

export default DealOfMonth