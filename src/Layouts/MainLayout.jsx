import React from 'react'
import Header from '../Pages/SharedPages/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/SharedPages/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout