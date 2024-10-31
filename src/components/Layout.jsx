import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layout = (props) => {
  return (
    <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
  )
}

export default Layout