import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../style/product_details.scss'
import PostReview from '../../Share/PostReview'
import { CartContext } from '../../Context/CartProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Cart_Popup from './Cart_Popup'
import Base_Url from '../../utils/config'
import { FaStar } from "react-icons/fa";


function Product_Details() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { addToCart } = useContext(CartContext)
    const [showPopup, setShowPopup] = useState(false)
    const [onImg, setOnImg] = useState(null)
    const [productDetails, setProductDetails] = useState(null)
    const [select, setSelect] = useState(null)
    const [increaseQty, setIncreaseQty] = useState(1)

    // Calculate product price based on quantity and original price safely

    const productPrice = (productDetails?.productOriginalPrice || 0) * increaseQty


    useEffect(() => {
        const showDetails = async () => {
            try {
                const response = await fetch(`${Base_Url}/products/show-details/${id}`)
                if (!response.ok) {
                    throw new Error("Network issue")
                }

                const data = await response.json()

                if (data && data.findOneProduct) {
                    setProductDetails(data.findOneProduct)
                } else {
                    console.warn("No product data found in API response.")
                }

            } catch (error) {
                console.log("Something went wrong", error)
            }
        }

        if (id) {
            showDetails()
        }
    }, [id])


    const productSize = ["S", "M", "L", "XL", "XXL"]

    const handleAddToCart = () => {
        if (!productDetails) return
        addToCart({
            id: productDetails.id,
            productImg: productDetails.productmainImg,
            productName: productDetails.productName,
            productQty: increaseQty,
            productPrice: productPrice,
        })
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 3000)
    }

    const changeOnImg = (img) => setOnImg(img)
    const handleSize = (size) => setSelect(size)

    const increment = () => setIncreaseQty(prev => prev + 1)
    const decrement = () => setIncreaseQty(prev => (prev > 1 ? prev - 1 : 1))

    if (!productDetails) {
        return <p>Loading product details...</p>
    }

    return (
        <Container>
            <Row>
                <div className="product_details_page  mt-5">
                    {showPopup && <Cart_Popup title={"Added your product"} />}

                    {/* Product images */}

                    <Col lg={6} sm={12}>
                        <div className="product_details_container">
                            <div className="show_other_img d-flex">
                                <div className="product_details_main_img">
                                    <img onClick={() => changeOnImg(productDetails.subImg1)} style={{ border: onImg === productDetails.subImg1 ? "1px solid green" : "none" }} src={productDetails.subImg1} alt="" />
                                    <img onClick={() => changeOnImg(productDetails.subImg2)} style={{ border: onImg === productDetails.subImg2 ? "1px solid green" : "none" }} src={productDetails.subImg2} alt="" />
                                    <img onClick={() => changeOnImg(productDetails.subImg3)} style={{ border: onImg === productDetails.subImg3 ? "1px solid green" : "none" }} src={productDetails.subImg3} alt="" />

                                </div>
                                <div className="main_show_img">
                                    <img src={onImg || productDetails.productmainImg} alt="main-product" />
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Product details */}


                    <Col lg={6} sm={12}>
                        <div className="product_details_content">
                            <div className="product_all_details">
                                <div className="product_name">
                                    <h2>{productDetails.productBrand}</h2>
                                    <h1>{productDetails.productName}</h1>
                                    <div className="rating-star-group mt-3 mb-3 flex align-items-center justify-between  ">
                                        <div className="rating_star flex align-items-center gap-2">
                                            {Array.from({ length: 5 }).map((line, idx) => {
                                                return (
                                                    <FaStar key={idx} />
                                                )
                                            })}
                                        </div>
                                        <div className="total_rating">
                                            <p>Rating : {productDetails.productRating}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="product_price">
                                    <p>Special price</p>
                                    <div className='product_price d-flex gap-2 items-center'>
                                        <h2>₹ {productPrice}</h2>
                                        <sup>₹ {productDetails.productOldPrice}</sup>
                                        <h5>{productDetails.productDiscount}% Off</h5>
                                    </div>
                                </div>

                                <div className="product_qty flex gap-2 items-center">
                                    <p onClick={decrement}><FaMinus /></p>
                                    <h6>{increaseQty}</h6>
                                    <p onClick={increment}><FaPlus /></p>
                                </div>

                                <div className="products_size flex items-center gap-3">
                                    <h6>Size :</h6>
                                    <span className='flex flex-wrap gap-3'>
                                        {productSize?.map((item, idx) => (
                                            <p
                                                key={idx}
                                                className={`size_product ${select === item ? "change_size" : ""}`}
                                                onClick={() => handleSize(item)}
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </span>
                                </div>

                                <div className="produt_offerc">
                                    <h3>Available offers</h3>
                                    <ul>
                                        {JSON.parse(`[${productDetails.productOffers}]`).map((offer, index) => (
                                            <li key={index}>
                                                "{offer}"
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                                <div className="product_keyfeatures">
                                    <h3>Product Category</h3>
                                    <p><span>Product Category : </span>{productDetails.productCategory}</p>
                                    <p><span>Product Tags : </span>{productDetails.productTags}</p>
                                    <p><span>Product Wash Care : </span>{productDetails.productWashCare}</p>
                                </div>

                                <div className="add_to_cart_button">
                                    <button className='main_button' onClick={handleAddToCart}>Add To Cart</button>
                                    <button className='main_button'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>


                </div>

                {/* post review  */}

                <PostReview productDescription={productDetails} />
            </Row>
        </Container>
    )
}

export default Product_Details
