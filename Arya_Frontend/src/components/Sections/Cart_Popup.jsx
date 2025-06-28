import React, { use, useEffect } from 'react';
import '../../style/popup.scss';
import { FaCheckCircle } from 'react-icons/fa';

function Cart_Popup({ title, show, onClose }) {

    // useEffect(()=>{
    //     setTimeout(() =>{
    //     })
    // })

    return (
        <div className="popup_container d-flex">
            <FaCheckCircle className="popup_icon" />
            <p>{title}</p>
        </div>
    );
}

export default Cart_Popup;
