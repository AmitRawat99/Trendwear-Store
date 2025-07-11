import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../style/addproduct.scss';
import Base_Url from '../utils/config';

function AddProducts() {
    const [imgValues, setImgValues] = useState({
        productmainImg: '',
        subImg1: '',
        subImg2: '',
        subImg3: '',
    })

    const [inputsValue, setInputsValue] = useState({
        productId: '',
        productName: '',
        productMainCategory: '',
        productOriginalPrice: '',
        productOldPrice: '',
        productBrand: '',
        productTags: '',
        productSubCategory : '',
        productRating: '',
        productmainImg: '',
        subImg1: '',
        subImg2: '',
        subImg3: '',
        productStock: '',
        productCategory: '',
        productShippingInfo: '',
        productOffers: '',
        productDiscount: '',
        productWashCare: '',
        productDescription: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputsValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const name = e.target.name;
        const category = inputsValue.productMainCategory || 'All';
        console.log(inputsValue.productCategory);



        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`${Base_Url}/products/upload?category=${category}`, {
                method: 'POST',
                body: formData,
            });

            console.log("category", category);

            const data = await res.json();

            console.log("data", data);

            if (data.success && data.filePath) {
                setInputsValue((prev) => ({
                    ...prev,
                    [name]: data.filePath,
                }));
            } else {
                alert('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image upload error');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${Base_Url}/products/add-all-products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputsValue),
            });

            const result = await response.json();

            if (result) {
                console.log('Product added successfully:', result);
                setInputsValue({
                    productId: '',
                    productName: '',
                    productMainCategory: '',
                    productOriginalPrice: '',
                    productOldPrice: '',
                    productBrand: '',
                    productTags: '',
                    productRating: '',
                    productmainImg: '',
                    subImg1: '',
                    subImg2: '',
                    subImg3: '',
                    productCategory: '',
                    productShippingInfo: '',
                    productOffers: '',
                    productWashCare: '',
                    productDescription: '',
                });
            }
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} action={'/upload'} method='post' encType="multipart/form-data">
                <Row className="mb-4">
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Product Id</Form.Label>
                            <Form.Control
                                name="productId"
                                value={inputsValue.productId}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Id"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                name="productName"
                                value={inputsValue.productName}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Name"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Main Category</Form.Label>
                            <Form.Control
                                name="productMainCategory"
                                value={inputsValue.productMainCategory}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Main Category"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* More text fields */}
                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Original Price</Form.Label>
                            <Form.Control
                                name="productOriginalPrice"
                                value={inputsValue.productOriginalPrice}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Original Price (9098)"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Old Price</Form.Label>
                            <Form.Control
                                name="productOldPrice"
                                value={inputsValue.productOldPrice}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Old Price (19098)"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Sub Image 1</Form.Label>
                            <Form.Control name="subImg1" onChange={handleFileChange} type="file" />
                            {inputsValue.subImg1 && (
                                <img
                                    src={inputsValue.subImg1}
                                    alt="Sub Image 1"
                                    style={{ width: '100px', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Sub Image 2</Form.Label>
                            <Form.Control name="subImg2" onChange={handleFileChange} type="file" />
                            {inputsValue.subImg2 && (
                                <img
                                    src={inputsValue.subImg2}
                                    alt="Sub Image 2"
                                    style={{ width: '100px', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Sub Image 3</Form.Label>
                            <Form.Control name="subImg3" onChange={handleFileChange} type="file" />
                            {inputsValue.subImg3 && (
                                <img
                                    src={inputsValue.subImg3}
                                    alt="Sub Image 3"
                                    style={{ width: '100px', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={12}>
                        <Form.Group>
                            <Form.Label>Main Image</Form.Label>
                            <Form.Control name="productmainImg" onChange={handleFileChange} type="file" />
                            {inputsValue.productmainImg && (
                                <img
                                    src={inputsValue.productmainImg}
                                    alt="Main Image"
                                    style={{ width: '150px', marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                name="productBrand"
                                value={inputsValue.productBrand}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Brand"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control
                                name="productTags"
                                value={inputsValue.productTags}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Tags ('one' , 'two' , 'there', 'mores')"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                name="productRating"
                                value={inputsValue.productRating}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Rating"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                name="productCategory"
                                value={inputsValue.productCategory}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Category"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Shipping Info</Form.Label>
                            <Form.Control
                                name="productShippingInfo"
                                value={inputsValue.productShippingInfo}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Shipping Info"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Products Offers</Form.Label>
                            <Form.Control
                                name="productOffers"
                                value={inputsValue.productOffers}
                                onChange={handleInputChange}
                                type="text"
                                placeholder='e.g. (first , second , third , mores)'
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">

                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Product Discount</Form.Label>
                            <Form.Control
                                name="productDiscount"
                                value={inputsValue.productDiscount}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Discount"
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Product Stock</Form.Label>
                            <Form.Control
                                name="productStock"
                                value={inputsValue.productStock}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product productStock"
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Product Sub Category</Form.Label>
                            <Form.Control
                                name="productSubCategory"
                                value={inputsValue.productSubCategory}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Product Subcategory"
                            />
                        </Form.Group>
                    </Col>

                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Wash Care</Form.Label>
                            <Form.Control
                                name="productWashCare"
                                value={inputsValue.productWashCare}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Wash Care Instructions"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="productDescription"
                                value={inputsValue.productDescription}
                                onChange={handleInputChange}
                                as="textarea"
                                rows={3}
                                placeholder="Product Description"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={12}>
                        <button type="submit" className="main_button">
                            Add Product
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default AddProducts;
