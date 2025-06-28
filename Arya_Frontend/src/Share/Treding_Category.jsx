import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../style/Treding_Category.scss'
import img1 from '../assets/Images/Man_Clothes/1 (2).webp'
import { FaStar } from "react-icons/fa";


import ProductImg1 from '../assets/Images/Treding_Clothes/1.webp'
import ProductImg2 from '../assets/Images/Treding_Clothes/2.webp'
import ProductImg3 from '../assets/Images/Treding_Clothes/3.webp'
import ProductImg4 from '../assets/Images/Treding_Clothes/4.webp'
import ProductImg5 from '../assets/Images/Treding_Clothes/5.webp'
import ProductImg6 from '../assets/Images/Treding_Clothes/6.webp'
import ProductImg7 from '../assets/Images/Treding_Clothes/7.webp'
import ProductImg8 from '../assets/Images/Treding_Clothes/8.webp'
import ProductImg9 from '../assets/Images/Treding_Clothes/9.webp'
import ProductImg10 from '../assets/Images/Treding_Clothes/10.webp'

function Treding_Category() {

    const Treding_Product = {
        1: {
            proudct_img: ProductImg1,
            BrandName: "KAJARU",
            Product_Name: "KAJARU Self Design Men Polo Neck Brown T‑Shirt",
            product_Original_price: "₹999",
            product_old_price: "₹259",
            product_rating: "4.2"
        },
        2: {
            proudct_img: ProductImg2,
            BrandName: "KAJARU",
            Product_Name: "Striped Men Round Neck Maroon T‑Shirt",
            product_Original_price: "299",
            product_old_price: "286",
            product_rating: "4"
        },
        3: {
            proudct_img: ProductImg3,
            BrandName: "Anand Sarees",
            Product_Name: "Graphic Print Bollywood Georgette Saree",
            product_Original_price: "499",
            product_old_price: "1999",
            product_rating: "2.5"
        }
        ,
        4: {
            proudct_img: ProductImg4,
            BrandName: "Areeh",
            Product_Name: "Women Chikan Embroidery Straight Kurta",
            product_Original_price: "1,699",
            product_old_price: "1,699",
            product_rating: "3.9"
        },
        5: {
            proudct_img: ProductImg5,
            BrandName: "KAJAR",
            Product_Name: "Full Sleeve Solid Men Jacket",
            product_Original_price: "999",
            product_old_price: "999",
            product_rating: "3.6"
        },
        6: {
            proudct_img: ProductImg6,
            BrandName: "Zarila",
            Product_Name: "Boys Solid Casual Maroon Shirt",
            product_Original_price: "999",
            product_old_price: "999",
            product_rating: "3.8"
        },
        7: {
            proudct_img: ProductImg7,
            BrandName: "ETTUKITTU",
            Product_Name: "Boys Self Design Casual White Shirt",
            product_Original_price: "999",
            product_old_price: "999",
            product_rating: "3.4"
        },
        8: {
            proudct_img: ProductImg8,
            BrandName: "FUBAR",
            Product_Name: "Men Chikan Embroidery Straight Kurta",
            product_Original_price: "3499",
            product_old_price: "495",
            product_rating: "3.9"
        },
        9: {
            proudct_img: ProductImg9,
            BrandName: "Honky Tonky",
            Product_Name: "Women Maxi Pink Full Length Dress",
            product_Original_price: "1349",
            product_old_price: "466",
            product_rating: "4.3"
        },
        10: {
            proudct_img: ProductImg10,
            BrandName: "Darkmode",
            Product_Name: "Boys Printed Casual Multicolor Shirt",
            product_Original_price: "599",
            product_old_price: "329",
            product_rating: "4.0"
        }
    }

    return (
        <>
            <Container>
                <div className="treding_category_title  mt-5 flex justify-between items-center mt-3">
                    <h1>Our Trending Categories</h1>
                    <li className='list-none' ><Link className='flex justify-center items-center gap-2'> See All Category <FaArrowRightLong /></Link></li>
                </div>
                <Row>
                    {
                        Object.values(Treding_Product).map((proudct, idx) => {
                            return (
                                <Col key={idx} lg={3} md={4} sm={6} className='col_section' >
                                    <div className="treding_products">
                                        <div className="treding_card">
                                            <div className="treding_card_title">
                                                <img src={proudct.proudct_img} alt="" />
                                                <div className="_treding_product_details">
                                                    <div className="product_name">
                                                        <h6>{proudct.BrandName}</h6>
                                                        <h2>{proudct.Product_Name}</h2>
                                                    </div>
                                                    <div className="product_rating flex justify-between items-center">
                                                        <div className="product_star flex gap-2">
                                                            {
                                                                Array.from({ length: 5 }).map((_, idx) => (

                                                                    <span key={idx}><FaStar /></span>
                                                                ))
                                                            }
                                                        </div>
                                                        <p>${proudct.product_rating} Rating</p>
                                                    </div>
                                                    <div className="product_price">
                                                        <h3><span>Rs :{proudct.product_Original_price}</span> <sup>{proudct.product_old_price}</sup></h3>
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

            </Container>
        </>
    )
}

export default Treding_Category