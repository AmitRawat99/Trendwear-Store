import React from 'react';
import '../../style/Footer.scss'

function Footer() {
    return (
        <div className="container-fluid">
            <footer className='footer-container'>
                <p>© {new Date().getFullYear()} Abjure Interio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
