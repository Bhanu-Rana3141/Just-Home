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
                <Col lg={4}>
                    <div className='subscribe-container'>
                        <div className='subscribe-text'>Subscribe</div>
                        <div className='mt-4 subscribe-input-container'>
                            <input className='subscribe-input-box' placeholder='Your e-mail'></input>
                            <button className='subscribe-btn'>Send <span><FaArrowRightLong /></span></button>
                        </div>
                        <div className='mt-4 subscribe-description'>Subscribe to our newsletter to receive our weekly feed.</div>
                    </div>
                </Col>

                <Col lg={1}>
                    <div className='discover-container'>
                        <div className='discover-text'>Discover</div>
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

                <Col lg={1}>
                    <div className='discover-container'>
                        <div className='discover-text'>Quick Links</div>
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

                <Col lg={2}>
                    <div className='contact-us-container'>
                        <div className='discover-text'>Contact Us</div>
                        <div className='discover-links'>
                            <div><Link to=''>hi@justhome.com</Link></div>
                            <div><Link to=''>(123) 456-7890</Link></div>
                        </div>
                    </div>
                </Col>

                <Col lg={2}>
                    <div className='our-address-container'>
                        <div className='discover-text'>Our Address</div>
                        <div className='our-address-contact'>
                            <div className=''>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</div>
                        </div>
                    </div>
                </Col>

                <Col lg={2}>
                    <div className='get-app-container'>
                        <div className='discover-text'>Get the app</div>
                        <div>
                            <div className='apple-container'>
                                <div className='apple-google-icon-wrapper'>
                                    <Link to=''><FaApple className='apple-google-icon' size={23} /></Link>
                                </div>
                                <div>
                                    <div className='download-link'><Link>Download on the</Link></div>
                                    <div className='store-link'><Link>Apple Store</Link></div>
                                </div>
                            </div>
                            <div className='google-container'>
                                <div className='apple-google-icon-wrapper'>
                                    <Link to=''><FaGooglePlay className='apple-google-icon' size={20} /></Link>
                                </div>
                                <div>
                                    <div className='download-link'><Link>Download on the</Link></div>
                                    <div className='store-link'><Link>Google Play</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mt-5'>
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