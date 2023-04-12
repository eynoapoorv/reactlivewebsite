import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestThumb from "../../assets/images/tes-thumb.png";
import TestiImageRight from "../../assets/images/testimonial-area-image.webp";
import Slider from "react-slick";

const Testimonial = () => {
        const testimonial_sliderSetting = {
          dots: true,
          infinite: true,
          speed: 500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        };

  return (
      <>
          <section className="section testimonial-area">
            <div className=" testimonial-cover container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-area-content"> 
                            <div className="heading-section">
                                <span className="section-sub-title"># Testimonial</span>
                                <h3>What Our Clients Say</h3>
                            </div>
                            <div  className="testimonial-area-slider">
                                <Slider {...testimonial_sliderSetting} className="testimonial-area-slider-pannel">
                                    <div className="testimonial-outer-wrapper">
                                        <div className="testimonial-wrapper">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in!
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat suscipit, assumenda cupiditate aut eos saepe dolor illum alias mollitia magnam quasi, amet, pariatur enim recusandae incidunt neque exercitationem doloribus consequatur.
                                            </p>
                                            <div className="testimonial-auth-info">
                                                <div className="thumb">
                                                    <img src={TestThumb} alt="" />
                                                </div>
                                                <div className="details">
                                                    <p className="test-auth-name">Jossen Thank</p>
                                                    <span className="test-designation">Founder of Antech</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-outer-wrapper">
                                        <div className="testimonial-wrapper">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in!
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat suscipit, assumenda cupiditate aut eos saepe dolor illum alias mollitia magnam quasi, amet, pariatur enim recusandae incidunt neque exercitationem doloribus consequatur.
                                            </p>
                                            <div className="testimonial-auth-info">
                                            <div className="thumb">
                                                <img src={TestThumb} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="test-auth-name">Jossen Thank</p>
                                                <span className="test-designation">Founder of Antech</span>
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-outer-wrapper">
                                        <div className="testimonial-wrapper">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in!
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat suscipit, assumenda cupiditate aut eos saepe dolor illum alias mollitia magnam quasi, amet, pariatur enim recusandae incidunt neque exercitationem doloribus consequatur.
                                            </p>
                                            <div className="testimonial-auth-info">
                                            <div className="thumb">
                                                <img src={TestThumb} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="test-auth-name">Jossen Thank</p>
                                                <span className="test-designation">Founder of Antech</span>
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                 </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-area-image-section">
                            <div className="testi-pannel">
                                 <img src={TestiImageRight} alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
      
      </>
  )
}

export default Testimonial