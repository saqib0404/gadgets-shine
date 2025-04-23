import React from 'react'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import ScrollToTop from '../../Custom/ScrollToTop'

const Root = () => {
    return (
        <div className='bg-base-200'>
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root