import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import FrontSliderwrap from "react-slick";

const FrontSlider = () => {
    const front_sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
          <section className="front-slider-section">
               <FrontSliderwrap {...front_sliderSetting} className="front-slider">
                    <div className="front-slider-wrapper slider-image-1">
                        <div className="front-slider-overlay">
                            <div className="slider-content">
                                <p>IT Business Consulting</p>
                                <h1>Our Agency Provide Best IT Solutions</h1>
                                <p>We are 100+ professional software engineers with more than
                                    10 years of experience in delivering superior products.</p>
                                <div className="slider-brn-wrapper">
                                    <a href="" className="slider-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="front-slider-wrapper slider-image-2">
                        <div className="front-slider-overlay">
                            <div className="slider-content">
                                <p>IT services Agency</p>
                                <h1>Awesome IT Services for Your Business</h1>
                                <p>We are 100+ professional software engineers with more than
                                    10 years of experience in delivering superior products.</p>
                                <div className="slider-brn-wrapper">
                                    <a href="" className="slider-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
               </FrontSliderwrap>
          </section>
    </>
  )
}

export default FrontSlider