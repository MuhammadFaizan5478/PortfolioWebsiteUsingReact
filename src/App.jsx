import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { Business } from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonials />
    <Clients />
    <CTA />
    <Footer />
    
    </>
  )
}

export default App