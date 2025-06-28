import React, { useState } from 'react'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {

    return (
        <>
            <div>
                <Header />
                <section>
                    {children}
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Layout