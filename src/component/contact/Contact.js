import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [msg, setMsg] = useState("");
    const [user, setUser] = useState({
        email: "",
        username: "",
        phoneno: "",
        message: "",
    });

    const { username, phoneno, email, message } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users", user)
            .then(response => setMsg(response.data.respMesg))
            .catch(error => console.log(error))
        e.target.reset();
        setUser('');
    };

    return (
        <>
            <section className="banner">
                <div className="image-pic"></div>
                <div className="image-shape" ></div>
                <div className="inner-banner">
                    <div className="container">
                        <div className="row">
                            <div className="banner-heading">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-two__content">
                                <div className="sec-title">
                                    <h2>Write us any message</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil recusandae nisi dicta voluptates delectus atque tempora, placeat tempore ad!</p>
                                <div className="contact-two__social">
                                    <a href="" className="fa-brands fa-instagram"></a>
                                    <a href="" className="fa-brands fa-facebook-f"></a>
                                    <a href="" className="fa-brands fa-skype"></a>
                                    <a href="" className="fa-brands fa-twitter"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form-box">
                                <div className="contact-fom-default-form">
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="clearfix row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <div className="field-inner">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Your Name"
                                                        required=""
                                                        onChange={onInputChange}
                                                        value={username} />
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <div className="field-inner">
                                                    <input
                                                        type="number"
                                                        name="phoneno"
                                                        placeholder="Phone Number"
                                                        required=""
                                                        onChange={onInputChange}
                                                        value={phoneno} />
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <div className="field-inner">
                                                    <input type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        required=""
                                                        onChange={onInputChange}
                                                        value={email} />
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <div className="field-inner">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write Message"
                                                        required=""
                                                        onChange={onInputChange}
                                                    >
                                                        {message}
                                                        
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12 ">
                                                {(msg === 'Somthing went Wrong')
                                                    ? <p style={{ color: "red" }}><b>{msg}</b></p>
                                                    : <p style={{ color: "MediumSeaGreen" }}><b>{msg}</b></p>
                                                }
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-one"
                                                    disabled={(username === " " || email === " " || phoneno === " " || message === " ") ? true : false}
                                                >
                                                    <i className="btn-curve"></i>
                                                    <span className="btn-title">Send message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-card">
                                <span className="material-symbols-outlined">location_on</span>
                                <a href="">xyzzz</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-card">
                                <span className="material-symbols-outlined">mail</span>
                                <a href="">6xyzzzzzzzzz</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-card">
                                <span className="material-symbols-outlined">phone_enabled</span>
                                <a href="">6123654789</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="contact-map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.27036209313!2d75.89415!3d22.725729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0973a4e817%3A0xec60df8b9cbfbced!2sEynoSoft%20Private%20Limited!5e0!3m2!1sen!2sin!4v1679576123731!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section> */}
        </>
    )
}

export default Contact