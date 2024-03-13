import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from "../components/Hero/Hero"
import Main from "../components/Main/Main"
import Features from '@/components/Features/Features'
import Pricing from '@/components/Pricing/Pricing'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const page = () => {
  return (
   <>
    <Navbar/>
    <Main/>
    <Features/>
    <Pricing/>
    <Contact/>
    <Hero/>
    <Footer/>
   </>
  )
}

export default page
