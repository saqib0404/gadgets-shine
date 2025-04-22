import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Gadgets from '../Gadgets/Gadgets'

const Home = () => {
  return (
    <div>
      <Banner />
      <Gadgets />
    </div>
  )
}

export default Home