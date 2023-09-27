import React from 'react'
import Top from '../top/Top'
import Hero from '../hero/Hero'
import About from '../about/About'
import Video from '../video/video'
import Services from '../services/Services'
import PreviousWorks from '../previous-works/PreviousWorks'
import Testimonials from '../testimonial/Testimonial'
import Blog from '../blog/Blog'
import GetStarted from '../get-started/GetStarted'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    <Top />
      <Hero />
      <About />
      <Video />
      <Services />
      <PreviousWorks />
      <Testimonials />
      <Blog />
      <GetStarted />
      <Footer />
    </>
  )
}

export default Home