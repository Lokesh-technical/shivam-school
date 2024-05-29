import AboutSchool from '@/Components/AboutSchool'
import LearnMore from '@/Components/LearnMore'
import ManagingTrustee from '@/Components/ManagingTrustee'
import Footer from '@/Components/Nav/Footer'
import Header from '@/Components/Nav/Header'
import React from 'react'

const About = () => {
  return <>
    <Header />
    <AboutSchool/>
    <ManagingTrustee />
    <LearnMore />
    <Footer />
  </>
}

export default About