import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../style/Footer.scss'

function Footer() {
    const FooterContent = [
        {
            FooterTitle: "ShopEasy",
            FooterDescription: "Your one-stop shop for electronics, fashion, and more."
        },
        {
            FooterTitle: "Customer Service",
            FooterList: ["Help Center", "Returns", "Track Order", "Shipping Info"]
        },
        {
            FooterTitle: "Useful Links",
            FooterList: ["Home", "About", "Contact", "Shop"]
        },
        {
            FooterTitle: "About Us",
            FooterList: ["Our Story", "Careers", "Press", "Blog"]
        },
        {
            FooterTitle: "My Account",
            FooterList: ["My Profile", "My Order History", "Order Tracking", "My Wishlist"]
        },
        {
            FooterTitle: "Contact",
            FooterList: ["Email: support@shopeasy.com", "Phone: +1 (800) 123-4567", "Location: New York, USA"]
        },
    ];

    return (
        <footer className="Footer_Container">
            <Container>
                <Row>
                    {FooterContent.map((item, idx) => (
                        <Col key={idx} lg={2} md={4} sm={6} xs={12} className="mb-4">
                            <h6>{item.FooterTitle}</h6>
                            {
                                item.FooterDescription
                                    ? <p>{item.FooterDescription}</p>
                                    : (
                                        <ul>
                                            {item.FooterList.map((listItem, i) => (
                                                <li key={i}>{listItem}</li>
                                            ))}
                                        </ul>
                                    )
                            }
                        </Col>
                    ))}
                </Row>

                <hr />
                <div className="footer_bottom text-center">
                    <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
