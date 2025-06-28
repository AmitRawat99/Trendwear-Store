import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Base_Url from '../utils/config';

function Shop() {
  const navigate = useNavigate();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('search') || '';

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const ShowProducts = async () => {
      try {
        const response = await fetch(`${Base_Url}/products/get-all-product`);
        if (!response.ok) {
          throw new Error("Network issue for fetching data");
        }
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    ShowProducts();
  }, []);

  // const filteredProducts = Products.filter((p) => {
  //   if (p.productName.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true
  //   }
  //   else if (p.productSubCategory.toLowerCase().includes(searchValue.toLowerCase())) {
  //     console.log("this is match on the sub li list")
  //   }
  //   else {
  //     console.log('not matcht the product on this category');
  //   }
  //   return false;
  // });


  const filteredProducts = Products.filter((p) => {
    const search = searchValue.toLowerCase();

    if (p.productName.toLowerCase().includes(search)) {
      return true;
    }
    else if (p.productSubCategory.toLowerCase().includes(search)) {
      // subcategory matches, include product
      return true;
    }
    return false;
  });



  return (
    <Container>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((cards, idx) => (
            <Col lg={3} md={4} sm={6} key={idx} className="mt-5">
              <div
                className="dashbord_proudct gap-3"
                onClick={() => navigate(`/product/details/${cards.slug}/${cards.id}`)}
              >
                <div className="dashbord_product_container">
                  <div className="dashbord_product_img">
                    <img className="w-100" src={cards.productmainImg} alt={cards.productName} />
                  </div>
                  <div className="dashbord_product_details">
                    <div className="dashbord_product_name">
                      <h4>{cards.productBrand}</h4>
                      <h2>{cards.productName}</h2>
                    </div>
                    <div className="dashbord_product_price flex items-center justify-between">
                      <div className="product_price d-flex gap-2 items-center">
                        <h2>₹ {cards.productOriginalPrice}</h2>
                        <h3>₹ {cards.productOldPrice}</h3>
                      </div>
                      <h5>{cards.productDiscount}% Off</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <Col className="mt-5">
            <h3 className='text-center text-xl'>No products found for "{searchValue}"</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Shop;
