import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../style/Header.scss'
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Banner from '../Sections/Banner';
import { Navigate, useNavigate } from 'react-router-dom';

function Header() {

    const [isOpneMobile, setOpenMobile] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate('/shop')

    const toggleBnt = () => {
        setOpenMobile(prev => !prev)
    }

    const SearchBtn = () => {
        if (searchValue.trim() !== '') {
            navigate(`/shop?search=${encodeURIComponent(searchValue.trim())}`);
            setSearchValue("")
        } else {
            alert("search the any products")
        }
    };


    return (
        <>
            <section>
                <SearchBar setSearchValue={setSearchValue} SearchBtn={SearchBtn} toggleBnt={toggleBnt} isOpneMobile={isOpneMobile} setOpenMobile={setOpenMobile} />
            </section>
            <section>
                <Navbar setSearchValue={setSearchValue} SearchBtn={SearchBtn} toggleBnt={toggleBnt} isOpneMobile={isOpneMobile} setOpenMobile={setOpenMobile} />
            </section>
        </>
    )
}

export default Header