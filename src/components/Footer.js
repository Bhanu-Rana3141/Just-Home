import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
        <Container fluid className='footer-container'>
            <Row>
                <Col>
                    <div className='footer-container-row1'>
                        <div className='footer-logo-container'>
                            <Link to=''><img src={logoImg} alt="Logo" /></Link>
                        </div>
                        <div className='footer-icon-container'>
                            <div className='follow-us'><Link to=''>Follow Us</Link></div>
                            <Link to=''><FaFacebookF className='footer-icon-common' /></Link>
                            <Link to=''><FaTwitter className='footer-icon-common' /></Link>
                            <Link to=''><FaInstagram className='footer-icon-common' /></Link>
                            <Link to=''><FaLinkedinIn className='footer-icon-common' /></Link>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col lg={3} md={12} sm={7} xs={12} className='input-margin-991'>
                    <div className='subscribe-container'>
                        <div className='subscribe-text common-font-12'>Subscribe</div>
                        <div className='mt-4 subscribe-input-container'>
                            <input className='subscribe-input-box common-font-10' placeholder='Your e-mail'></input>
                            <button className='subscribe-btn common-font-10'>Send <span><FaArrowRightLong /></span></button>
                        </div>
                        <div className='mt-4 subscribe-description common-font-10'>Subscribe to our newsletter to receive our weekly feed.</div>
                    </div>
                </Col>

                <Col lg={1} md={2} sm={2} xs={6} className='input-margin-575'>
                    <div className='discover-container'>
                        <div className='discover-text common-font-12'>Discover</div>
                        <ul className='discover-links'>
                            <li><Link to=''>Miami</Link></li>
                            <li><Link to=''>New York</Link></li>
                            <li><Link to=''>Chicago</Link></li>
                            <li><Link to=''>Florida</Link></li>
                            <li><Link to=''>Los Angeles</Link></li>
                            <li><Link to=''>San Diego</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col lg={2} md={2} sm={3} xs={6} className='input-margin-575'>
                    <div className='discover-container'>
                        <div className='discover-text common-font-12'>Quick Links</div>
                        <ul className='discover-links'>
                            <li><Link to=''>About</Link></li>
                            <li><Link to=''>Contact</Link></li>
                            <li><Link to=''>FAQ’s</Link></li>
                            <li><Link to=''>Blog</Link></li>
                            <li><Link to=''>Pricing Plans</Link></li>
                            <li><Link to=''>Privacy Policy</Link></li>
                            <li><Link to=''>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col lg={2} md={2} sm={3} xs={6} className='input-margin-575'>
                    <div className='contact-us-container'>
                        <div className='discover-text common-font-12'>Contact Us</div>
                        <div className='discover-links'>
                            <div><Link className='common-font-10' to=''>hi@justhome.com</Link></div>
                            <div><Link className='common-font-10' to=''>(123) 456-7890</Link></div>
                        </div>
                    </div>
                </Col>

                <Col lg={2} md={2} sm={3} xs={6} className='input-margin-575'>
                    <div className='our-address-container'>
                        <div className='discover-text common-font-12'>Our Address</div>
                        <div className='our-address-contact'>
                            <div className='common-font-10'>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</div>
                        </div>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={6} xs={12}>
                    <div className='get-app-container'>
                        <div className='discover-text common-font-12 get-app-text'>Get the app</div>
                        <div>
                            <div className='apple-container'>
                                <div className='apple-google-icon-wrapper'>
                                    <Link to=''><FaApple className='apple-google-icon' size={20} /></Link>
                                </div>
                                <div>
                                    <div className='download-link common-font-10'><Link>Download on the</Link></div>
                                    <div className='store-link common-font-12'><Link>Apple Store</Link></div>
                                </div>
                            </div>
                            <div className='google-container'>
                                <div className='apple-google-icon-wrapper'>
                                    <Link to=''><FaGooglePlay className='apple-google-icon' size={20} /></Link>
                                </div>
                                <div>
                                    <div className='download-link common-font-10'><Link>Download on the</Link></div>
                                    <div className='store-link common-font-12'><Link>Google Play</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col lg={12} md={12} sm={12}>
                    <div className='copyright-container'>
                        <div className="copyright">Copyright &copy; 2024. JustHome</div>
                        <FaArrowUp className='up-arrow' />
                    </div>

                </Col>
            </Row>
        </Container>
    )
}