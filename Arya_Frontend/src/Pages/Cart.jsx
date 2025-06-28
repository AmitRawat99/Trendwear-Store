import React from 'react'
import { useContext, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import '../style/Cart.scss'
import { CartContext } from '../Context/CartProvider'
import { MdDelete } from "react-icons/md";
import Cart_Popup from '../components/Sections/Cart_Popup'


function Cart() {
    const { cartItem, removeItem } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false)

    const handleDelete = (item) => {
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
            removeItem(item)
        }, 3000)
    }

    const subTotal = cartItem.reduce((acc, item) => acc + item.productPrice * item.productQty, 1)
    const deliverCharge = 50;
    const tax = Math.floor((18 / 100) * (subTotal * 0.18))
    console.log(tax);

    const grandTotal = +(subTotal + tax + deliverCharge);

    return (
        <Container>
            <div className="add_to_cart_product mt-5">
                {showPopup && <Cart_Popup title={"Deleted This Product"} />}
                <Row>

                    {/* Left: Product Table */}

                    <Col lg={8}>
                        <h3 className="mb-3 product_title">Shopping Cart</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Product img</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItem.map((item, idx) => {
                                        console.log(cartItem);
                                        return (
                                            <tr className='cart_product_details' key={idx}>
                                                <td >{item.id}</td>
                                                <td >
                                                    <img style={{ width: "100%", height: "80px" }} src=
                                                        {item.productImg} alt="" />
                                                </td>
                                                <td className='product_name'>{item.productName}</td>
                                                <td>{item.productQty}</td>
                                                <td>{item.productPrice}</td>
                                                <td onClick={() => handleDelete(item)}><MdDelete /></td>

                                            </tr >
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>

                    {/* Right: Payment Summary */}
                    <Col lg={4}>
                        <h3 className="mb-3 product_title">Order Summary</h3>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>{subTotal}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charge</td>
                                    <td>₹50</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>18%</td>
                                </tr>
                                <tr>
                                    <th>Grand Total</th>
                                    <th>₹{grandTotal}</th>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="success" className="w-100 mt-3">Proceed to Checkout</Button>
                    </Col>
                </Row>
            </div>
        </Container >
    )
}

export default Cart
