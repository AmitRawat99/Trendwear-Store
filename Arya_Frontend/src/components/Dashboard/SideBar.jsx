import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Base_Url from '../../utils/config';

function SideBar({ activeItem, setActiveItem, AllProducts }) {
    const location = useLocation();
    const pathname = location.pathname;
    const [currentCategory, setCurrentCategory] = useState('');


    const notProudct = {
        fontSize: '18px',
        textAlign: "center"
    }


    const showtabs = {
        "baby-kids": ["T-Shirts", "Shorts", "Boys' Jacket", "School Bags", "Toys", "Dresses & Skirts", "Ethnic Wear", "T-shirts Tops"],
        woman: ["Kurtas & Kurtis", "Gowns", "Dresses", "Jeans", "Shorts", "Sarees", , "Blouse", "Lehenga Choli", "Night Dresses Nighties"],
        man: ["T-Shirts", "Formal Shirts", "Jeans", "Track pants", "Kurta", "Casual Trousers", "Jackets", "Sweater", "Suits, Blazers & Waistcoats"]
    };


    useEffect(() => {
        const pathSegment = pathname.split('/').pop().toLowerCase();
        if (Object.keys(showtabs).includes(pathSegment)) {
            setCurrentCategory(pathSegment);
            setActiveItem('Kurtas & Kurtis');
        } else {
            setCurrentCategory('');
            setActiveItem('');
        }
    }, [pathname]);


    const HandleTabsbtn = (item) => {
        setActiveItem(item);

        const filtered = AllProducts.filter(product =>
            product.productSubCategory?.toLowerCase() === item.toLowerCase()
        );

    };


    return (
        <div className="sidebar_container">
            {
                !currentCategory ? <h4 style={notProudct} className="mt-2 not_category mb-2 text-xs text-capitalize">
                    {currentCategory ? `${currentCategory} Categories` : "No Category Selected"}
                </h4> : (
                    <>
                        <div className="sidebar_menus">
                            <ul>
                                {showtabs[currentCategory]?.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`sidebar_tabs ${activeItem === item ? "active" : ""}`}
                                        onClick={() => HandleTabsbtn(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter_section">
                            <div className="filter_price">
                                <h4>Filter Product</h4>
                                <hr />
                            </div>
                            <div className="sidebar_filter mt-3 flex items-center gap-1">
                                <label>Price Range: </label>
                                <input type="range" min="0" max="5000" className="price_range" />
                                <span>Up to ₹5000</span>
                            </div>
                        </div>
                    </>

                )
            }
        </div>
    );
}

export default SideBar;
