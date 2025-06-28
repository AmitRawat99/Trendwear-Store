import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </>
    )
}

export default Layout