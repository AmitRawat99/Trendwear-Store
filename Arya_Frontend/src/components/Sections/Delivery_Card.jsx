import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../style/Delivery_Card.scss'

import FreeDelivery from '../../assets/Images/Delivery/delivery-truck.webp'
import Grantee from '../../assets/Images/Delivery/garantee.webp'
import Paymnet from '../../assets/Images/Delivery/payment-method.webp'
import support from '../../assets/Images/Delivery/post-it.webp'

function Delivery_Card() {

    const delivery_cards_section = [
        {
            ProductImg: FreeDelivery,
            ProductName: "Free Delivery Across The Us !",
            productDescription: "Free delivery for all orders above $100"
        },
        {
            ProductImg: support,
            ProductName: "Top Note Support!",
            productDescription: "Chat with us if you’ve any questions"
        },
        {
            ProductImg: Grantee,
            ProductName: "100% Satisfaction Guarantee",
            productDescription: "Providing help in case of dissatisfaction"
        },
        {
            ProductImg: Paymnet,
            ProductName: "Secure Payment",
            productDescription: "We use safest payment technologies"
        },
    ]

    return (
        <>
            <Container>
                <Row>
                    {
                        delivery_cards_section.map((cards, idx) => {
                            return (
                                <Col lg={3}  sm={6} xm={12} key={idx}>
                                    <div className="deliver_container">
                                        <div className="delivery_card flex items-center justify-center flex-column gap-1">
                                            <img src={cards.ProductImg} alt="" />
                                            <h2>{cards.ProductName}</h2>
                                            <p>{cards.productDescription}</p>
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

export default Delivery_Card