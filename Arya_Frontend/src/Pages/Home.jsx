import React from 'react'
import Header from '../components/Header/Header'
import Delivery_Card from '../components/Sections/Delivery_Card'
import DealOfMonth from '../Share/DealOfMonth'
import Treding_Category from '../Share/Treding_Category'
import Sale_Product_Banner from '../components/Sections/Sale_Product_Banner'
import Summer_Collection from '../components/Sections/Summer_Collection'
import NewsLatter from '../components/Sections/NewsLatter'
import Banner from '../components/Sections/Banner'
import Scroller from '../Share/Scroller'

function Home() {
    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <Delivery_Card />
            </section>
            <section>
                <Summer_Collection />
            </section>
            <section>
                <DealOfMonth />
            </section>
            <section>
                <Sale_Product_Banner />
            </section>
            <section>
                <Treding_Category />
            </section>
            <section>
                <NewsLatter />
            </section>
            <section>
                <Scroller/>
            </section>
        </>
    )
}

export default Home