import React from 'react'
import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.jpg';
import Image3 from '../../assets/images/2.png';
import '../../assets/globalStyle.css';

const About = () => {
  return (
     <>
      <section className="section" >
       <div className="about-section container">
          <div className="row align-items-center">
                <div className="col-lg-6 ">
                        <div className="about-us-image">
                            <img className="about-image1" src={Image1} alt="" />
                            <img className="about-image2" src={Image2} alt="" />
                            <img className="about-image3" src={Image3} alt=""/>
                        </div>
                </div> 
                <div className="col-lg-6 ">
                     <div className="about-us-content">
                        <span className="section-sub-title"># ABOUT COMPANY</span>
                        <h5 className="about-title">We Execute Our Ideas <br/>
                             The Start To Finish</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ab reiciendis ut est velit architecto quas praesentium dolor tenetur omnis.</p>
                     </div>
                     <a href="" className="about-btn">Read More</a>
                </div>
          </div>
       </div>
   </section>
   </>
  )
}

export default About