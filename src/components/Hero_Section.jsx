import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Hero_Section() {
  return (
    <>
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">
      <div className="content-hontaeader">
        <div className="ciner-fluid">
         <Outlet></Outlet>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>)
}

export default Hero_Section