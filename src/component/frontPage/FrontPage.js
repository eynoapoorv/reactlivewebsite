import React from 'react'
import "../../assets/globalStyle.css";
import About from "../about/About";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial";
import CleintSection from '../client/CleintSection';
import FrontSlider from "../frontSlider/FrontSlider";

const FrontPage = () => {
  return (
     <>
       <FrontSlider />
        <About />
        <Services />
        <Portfolio />
        <Testimonial />
        <CleintSection />
     </>
  )
}

export default FrontPage