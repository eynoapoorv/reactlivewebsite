import React from 'react'
import FooterLogo from "../../assets/images/logo-1.png";

const Footer = () => {
  return (
    <>
      <footer class="">
            <div class="footer-section container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-logo">
                            <a href=""><img src={FooterLogo} /></a>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="footer-content">
                        <h6 class="footer-title">LINKS</h6>
                        <ul class="footer-nav-links">
                            <li><a href="">HOME</a></li>
                            <li><a href="">PRICING</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">SERVICES</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                        </div>
                    </div> 

                    <div class="col-lg-3">
                            <div class="footer-content">
                                <h6 class="footer-title">LINKS</h6>
                                <ul class="footer-nav-links">
                                    <li><a href="#">TERM AND CONDITION</a></li>
                                    <li><a href="">PRICING</a></li>
                                    <li><a href="">ABOUT US</a></li>
                                    <li><a href="">SERVICES</a></li>
                                    <li><a href="">CONTACT</a></li>  
                                </ul>
                            </div>
                    </div> 

                    <div class="col-lg-2">
                        <div class="footer-content">
                                <h6 class="footer-title">LINKS</h6>
                                <ul class="footer-nav-links">
                                    <li><a href="#">TERM AND CONDITION</a></li>
                                    <li><a href="">PRICING</a></li>
                                    <li><a href="">ABOUT US</a></li>
                                    <li><a href="">SERVICES</a></li>
                                    <li><a href="">CONTACT</a></li>  
                                </ul>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                        <div class="copy-right-text">
                            <p>Copyright © 2022 Solvency. Designed By <a href="">Devsdesign</a></p>
                        </div>
                </div>
            </div>
      </footer>
 </>
  )
}

export default Footer