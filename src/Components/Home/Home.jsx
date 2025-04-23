import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Gadgets from '../Gadgets/Gadgets'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Gadgets Shine</title>
      </Helmet>
      <Banner />
      <Gadgets />
    </div>
  )
}

export default Home