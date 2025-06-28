import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../style/Banner.scss'

function Sale_Product_Banner() {
    return (
        <>
            <Container>
                <div className="sale_product_banner">
                    <div className="sale_content">
                        <h3>Big Summer Sale !</h3>
                        <p>Discover the latest trends in summer fashion with up to 50% off select items. Limited time only...!</p>
                        <button className="main_button">Shop Now</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Sale_Product_Banner