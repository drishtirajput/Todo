import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ChooseUs from './components/ChooseUs'
import Services from './components/Services'
import Products from './components/Products'
import Clients from './components/Clients'
import ClientsReviews from './components/ClientsReviews'
import QnA from './components/QnA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Home />
      <div className='w-[85%] mx-auto'>
        <AboutUs />
        <ChooseUs />
        <Services />
        <Products />
        <Clients />
        <ClientsReviews />
        <QnA />
      </div>
      <Footer />
    </>
  )
}

