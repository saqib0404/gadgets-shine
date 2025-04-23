import React from 'react'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <div className='bg-base-200'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root