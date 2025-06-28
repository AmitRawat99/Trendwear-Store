import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../../style/Header.scss'
import Appliances from '../../assets/Images/Navimg/Appliances.webp'
import Electrics from '../../assets/Images/Navimg/Electrics.webp'
import Home from '../../assets/Images/Navimg/Home.webp'
import kids from '../../assets/Images/Navimg/kids.webp'
import man from '../../assets/Images/Navimg/man.webp'
import toy from '../../assets/Images/Navimg/toy.webp'
import woman from '../../assets/Images/Navimg/woman.webp'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function Navbar({ SearchBtn, setSearchValue, toggleBnt, isOpneMobile, setOpenMobile }) {
    const navigate = useNavigate()
    const [isOpenTab, setOpenTab] = useState(null)

    const navbarContent = {
        1: { img: Appliances, tabName: "Kilos", tabLink: "kilos" },
        2: { img: Home, tabName: "Mobiles", tabLink: "mobile" },
        3: { img: Electrics, tabName: "Electrics", tabLink: "electrics" },
        4: { img: Home, tabName: "Home & Furniture", tabLink: "home-furniture" },
        5: { img: Appliances, tabName: "Appliances", tabLink: "appliances" },
        6: { img: kids, tabName: "Flight Booking", tabLink: "flight-booking" },
        7: { img: toy, tabName: "Beauty Toy ", tabLink: "beauty-toy" },
        8: { img: kids, tabName: "Baby & Kids", tabLink: "baby-kids" },
        9: { img: woman, tabName: "Woman", tabLink: "woman" },
        10: { img: man, tabName: "Man", tabLink: "man" },
    }

    const showtabs = {
        "baby-kids": ["T-Shirts", "Shorts", "Boys' Jacket", "School Bags", "Toys", "Dresses & Skirts", "Ethnic Wear", "T-shirts Tops"],
        woman: ["Kurtas & Kurtis", "Gowns", "Dresses", "Jeans", "Shorts", "Sarees", "Blouse", "Lehenga Choli", "Night Dresses Nighties"],
        man: ["T-Shirts", "Formal Shirts", "Jeans", "Track pants", "Kurta", "Casual Trousers", "Jackets", "Sweater", "Suits, Blazers & Waistcoats"]
    };

    const handleSubItemClick = (sub) => {
        setSearchValue(sub);
        navigate(`/shop?search=${encodeURIComponent(sub)}`);
        if (setOpenMobile) setOpenMobile(false);
    };

    return (
        <>
            <Container>
                <div className="navbar_container">
                    <div className="navbars_value">

                        <div className="all_navbars_content flex justify-between items-center">
                            {
                                Object.values(navbarContent).map((item, idx) => (
                                    <div className="navbar_product" key={idx}>
                                        <img style={{ width: "30px", height: "30px" }} src={item.img} alt="" />
                                        <li className='list-none'>
                                            <Link to={`/dashbord/${item.tabLink}`}>{item.tabName}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </div>

                        {isOpneMobile && (
                            <div className="Mobile_Navbar">
                                {
                                    Object.values(navbarContent).map((item, idx) => {
                                        const subItems = showtabs[item.tabLink];
                                        return (
                                            <div
                                                className="mobile_navbar_product flex justify-between gap-2 mt-3"
                                                key={idx}
                                                onClick={() => setOpenTab(isOpenTab === item.tabLink ? null : item.tabLink)}
                                            >
                                                <div className="mobile_navbar_section">
                                                    <div className="mobile_nav_sublist flex gap-2">
                                                        <img style={{ width: "30px", height: "30px" }} src={item.img} alt="" />
                                                        <li className='list-none'>
                                                            <Link to={`/dashbord/${item.tabLink}`}>{item.tabName}</Link>
                                                        </li>
                                                    </div>

                                                    {
                                                        subItems && (
                                                            <div className={`sub_ulList ${isOpenTab === item.tabLink ? "active" : ""}`}>
                                                                {subItems.map((sub, i) => (
                                                                    <li key={i}>
                                                                        <span onClick={(e) => {
                                                                            handleSubItemClick(sub);
                                                                        }}
                                                                        >
                                                                            {sub}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="mobile_navbar_icon">
                                                    {isOpenTab === item.tabLink ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="Mobile_search_bars_icon flex items-center gap-2">
                                    <input
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        type="search"
                                        placeholder='Search For Product , Brands and More'
                                    />
                                    <IoSearchOutline onClick={SearchBtn} />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar
