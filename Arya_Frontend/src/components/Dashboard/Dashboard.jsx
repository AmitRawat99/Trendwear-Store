import React from 'react'
import '../../style/Dashboard.scss'
import { Container } from 'react-bootstrap'
import SideBar from './SideBar'
import SideBar_Content from './SideBar_Content'
import { useState, useEffect } from 'react'
import Base_Url from '../../utils/config'

function Dashboard() {

    const [AllProducts, setProducts] = useState([]);
    const [activeItem, setActiveItem] = useState('');


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${Base_Url}/products/get-all-product`);
                if (!response.ok) throw new Error('Network issue');
                const data = await response.json();

                setProducts(Array.isArray(data) ? data : data.products || []);

            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <>
            <Container>
                <main className="main_container">
                    <aside className='menu'>
                        <SideBar setActiveItem={setActiveItem} activeItem={activeItem} AllProducts={AllProducts} />
                    </aside>
                    <section className='content'>
                        <SideBar_Content setProducts={setProducts} activeItem={activeItem} AllProducts={AllProducts} />
                    </section>
                </main>
            </Container>
        </>
    )
}

export default Dashboard