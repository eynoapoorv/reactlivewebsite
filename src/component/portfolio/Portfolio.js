import React from 'react'
import PtImg from '../../assets/images/portfolioImg.jpg';



const Portfolio = () => {
  return (
      <>
          <section className="section">
      <div className="portfolio-section container">
           <div className="text-center">
                <div className="heading-section">
                <span className="section-sub-title"># Our Portfolio</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rerum quo sapiente? Ullam quasi iusto dolores libero optio blanditiis aliquam!</p>
                </div>
           </div>

            <div className="portfolio-row">
                <div className="row">
                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href="">Social Media App</a></h4>
                                    </div>
                                    <a href="" className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href="">Social Media App</a></h4>
                                    </div>
                                    <a href="" className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src= {PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href="">Social Media App</a></h4>
                                    </div>
                                    <a href="" className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="portfolio-box col-lg-6">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href="">Social Media App</a></h4>
                                    </div>
                                    <a href="" className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-6">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href="">Social Media App</a></h4>
                                    </div>
                                    <a href="" className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-btn text-center">
                <a href="">Learn More</a>
            </div>
      </div>
   </section>
      
      </>
  )
}

export default Portfolio