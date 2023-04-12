import React from 'react';
// import {MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import "../../assets/globalStyle.css";
import Logomain from "../../assets/images/logo-1.png";




const Navbar = () => {
  return (
    <nav className='NavbarItem'>
       <div className='navbarContainer'>
          <a className='navbar-logo'>
              <img src={Logomain} alt="" />
          </a>
        <div className='menu-icon'>

        </div>
          <div className='navbar-menu'>
               <ul>
              {/* {MenuItems.map((item, index) =>{
                return(
                  <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
              })} */}

             <li> <Link to="/">Home</Link></li>
             <li> <Link to="/about">About</Link></li>
             <li> <Link to="/services">Services</Link></li>
             <li> <Link to="/portfolio">Case Study</Link></li>
             <li> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="quote-btn">
              <a href="">Get A Quote</a>
          </div>
       
        </div>
    </nav>
  )
}

export default Navbar