import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../../style/Dashboard.scss'

function SideBar_Content({ AllProducts, activeItem }) {
    const { slug } = useParams();
    const navigate = useNavigate();

    const ProductperPage = 20;
    const [pagination, setPagination] = useState(1);
    const [DataToRender, setDataToRender] = useState([]);
    const [Products, setProducts] = useState([]);

    
    useEffect(() => {
        if (!slug || !AllProducts.length) {
            setDataToRender([]);
            return;
        }

        const filtered = AllProducts.filter(product => {
            const mainMatch = product.productMainCategory?.toLowerCase() === slug.toLowerCase();
            const subMatch = activeItem
                ? product.productSubCategory?.toLowerCase() === activeItem.toLowerCase()
                : true;
            return mainMatch && subMatch;
        });

        setPagination(1); 
        setDataToRender(filtered);
    }, [slug, AllProducts, activeItem]);

    useEffect(() => {
        const lastProduct = ProductperPage * pagination;
        const firstProduct = lastProduct - ProductperPage;
        const currentProducts = DataToRender.slice(firstProduct, lastProduct);
        setProducts(currentProducts);
    }, [pagination, DataToRender]);

    const totalPages = Math.ceil(DataToRender.length / ProductperPage);

    return (
        <Container>
            <Row>
                {Products.length === 0 && (
                    <p className='text-center mt-5 font-xl'>
                        No products found in this tab.
                    </p>
                )}

                {Products.map((cards, idx) => (
                    <Col lg={3} md={4} sm={6} xs={6} key={idx}>
                        <div className="dashbord_proudct gap-3"
                            onClick={() => navigate(`/product/details/${cards.slug}/${cards.id}`)}>
                            <div className="dashbord_product_container">
                                <div className="dashbord_product_img">
                                    <img src={cards.productmainImg} alt={cards.productName} />
                                </div>
                                <div className="dashbord_product_details">
                                    <div className="dashbord_product_name">
                                        <h4>{cards.productBrand}</h4>
                                        <h2>{cards.productName}</h2>
                                    </div>
                                    <div className="dashbord_product_price flex items-center justify-between">
                                        <div className='product_price d-flex gap-2 items-center'>
                                            <h2>₹ {cards.productOriginalPrice}</h2>
                                            <h3>₹ {cards.productOldPrice}</h3>
                                        </div>
                                        <h5>{cards.productDiscount}% Off</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {totalPages > 1 && (
                <div className="pagination_section mt-4 text-center">
                    <div className="pagination_button d-flex gap-2 justify-content-center flex-wrap">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPagination(i + 1)}
                                className={`btn ${pagination === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    )
}

export default SideBar_Content;
