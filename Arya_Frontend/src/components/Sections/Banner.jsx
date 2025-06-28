import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../../style/Banner.scss'
import banner1 from '../../assets/Images/Banner/banners (1).webp'
import banner2 from '../../assets/Images/Banner/banners (2).webp'
import banner3 from '../../assets/Images/Banner/banners (3).webp'
import banner4 from '../../assets/Images/Banner/banners (4).webp'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Banner() {

    const sliderImg = [banner1, banner2, banner3, banner4]

    const [slide, setSlide] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prevSlide) =>
                prevSlide === sliderImg.length - 1 ? 0 : prevSlide + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    const slideRight = () => {
        if (slide < sliderImg.length - 1) {
            setSlide(slide + 1)
        }
    }

    const slideLeft = () => {
        if (slide > 0) {
            setSlide(slide - 1)
        }
    }

    return (
        <>
            <Container fluid>
                <div className="banner_container">
                    <img src={sliderImg[slide]} alt="" />
                    <div className="scroll-icons">
                        <FaArrowRight onClick={slideRight} />
                        <FaArrowLeft onClick={slideLeft} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner