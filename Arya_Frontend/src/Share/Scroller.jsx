import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import '../style/scrollBar.scss'


function Scroller() {
    const [show, setShow] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const ScollNow = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="scrollBar">
                <div className={`scroll_icon ${show ? "show" : "nonshow"}`} onClick={ScollNow}>
                    <FaArrowUp />
                </div>
            </div>
        </>
    )
}

export default Scroller