import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import NavBar from './NavBar'
import OurServices from './OurServices'
import Reviews from './Reviews'

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <AboutUs/>
            <OurServices/>
            <Reviews/>
            <Footer />
        </div>
    )
}
