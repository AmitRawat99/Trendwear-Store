import React from 'react'
import sale_banner1 from '../../assets/Images/Banner/sale_banner1.webp'
import sale_banner2 from '../../assets/Images/Banner/sale_banner2.webp'
import sale_banner3 from '../../assets/Images/Banner/sale_banner3.webp'
import { Col, Container, Row } from 'react-bootstrap'
import '../../style/Banner.scss'

function Summer_Collection() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={7} id='sale_first_product'>
                        <div className="sale_product_img">
                            <div className="collection_main_img">
                                <img src={sale_banner1} alt="" />
                                <div className="sale_product_img_collection">
                                    <h2>Sweet & Stylish – Just for Her</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae fugiat impedit reiciendis. Numquam fugit dolor nihil quos exercitationem quae veritatis quidem tenetur. Corrupti odit nihil, iste fugit repellat voluptatibus.....</p>
                                    <button className='main_button'>Shop</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="sale_product_img ">
                            <div className="collection_img">
                                <img src={sale_banner3} alt="" />
                                <div className="sale_product_img_collection">
                                    <h2>Cool Looks for Cool Boys</h2>
                                </div>
                            </div>
                            <div className="collection_img">
                                <img src={sale_banner2} alt="" />
                                <div className="sale_product_img_collection">
                                    <h2>Stylish Looks for Little Ones</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Summer_Collection