import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import '../style/allProduct.scss'

import { Table, Container, Image } from 'react-bootstrap';
import Base_Url from '../utils/config';

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false)
    const [pagination, setPagination] = useState(1)
    const productPerPages = 12;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${Base_Url}/products/get-all-product`);
                const data = await res.json();

                setProducts(data.products || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    const lastProduct = pagination * productPerPages;
    const firstProduct = lastProduct - productPerPages;
    const currentProduct = products.slice(firstProduct, lastProduct)
    
    const totalProduct = Math.ceil(products.length / productPerPages)

    const nextBnt = () => {
        if (pagination < totalProduct) {
            setPagination(pagination + 1)
        }
    }
    const prevBtn = () => {
        if (pagination > 1) {
            setPagination(pagination - 1)
        }
    }

    const deleteProduct = async (id) => {
        try {
            const response = fetch(`${Base_Url}/delete-product/${id}`, {
                method: "Delete"
            })
            alert("delete this item")

            if (!response) {
                throw new error("failed to delete product")
            }
            const result = await response.json()
            setProducts(product => product.filter(products => (products.id || products._id) !== id))

        } catch (error) {
            console.log("somethink went wrong", error)
        }
    }


    return (
        <Container>
            <div className="table-responsive">
                <Table bordered hover>
                    <thead className="table-dark">
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Old Price</th>
                            <th>Rating</th>
                            <th>Delivery Info</th>
                            <th>Tags</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProduct.length > 0 ? (
                            currentProduct.map(product => (
                                <tr key={product.id}>
                                    {/* <td>
                                        <Image src={product.productmainImg} alt="Product" width={50} height={50} />
                                    </td> */}
                                    <td>{product.productName}</td>
                                    <td>{product.category}</td>
                                    <td>₹{product.productOriginalPrice}</td>
                                    <td>₹<s>{product.productOriginalPrice}</s></td>
                                    <td>{product.productRating || 'N/A'}</td>
                                    <td>{product.productShippingInfo || 'N/A'}</td>
                                    <td>{product.productTags || 'N/A'}</td>
                                    <td >{product.productDescription}</td>
                                    <td className='action-btn'>
                                        <div className="action-btns">
                                            <MdDelete onClick={() => deleteProduct(product.id)} />
                                            <FaEdit />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center">No products found.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <ul className="pagination-number">
                    <li onClick={() => prevBtn()}>Preview</li>
                    <li onClick={() => nextBnt()}>Next</li>
                </ul>
            </div>
        </Container>
    );
}

export default AllProducts;
