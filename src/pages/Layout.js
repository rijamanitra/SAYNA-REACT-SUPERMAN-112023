import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Social from '../components/Social'

function Layout() {
  return (
    <>
    <NavBar/>
    <Social/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout