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
                <Col lg={4} md={12} sm={12} className='subscribe-container'>
                    <div className='mb-4 subscribe-text'>Subscribe</div>
                    <div className='mb-4 input-sendBtn-container'>
                        <div className='footer-input-container'>
                            <input className='footer-white-color' type='email' placeholder='Your e-mail'></input>
                        </div>
                        <button className='subscribe-btn'>Send<span className='send-arrow'><FaArrowRightLong /></span></button>
                    </div>
                    <div className='footer-white-color'>Subscribe to our newsletter to receive our weekly feed.</div>
                </Col>
                <Col lg={8} className='footer-col2'>
                    <div className='footer-links-container'>
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

                        <div className='contact-us-container'>
                            <div className='discover-text'>Contact Us</div>
                            <div className='discover-links'>
                                <div><Link className='' to=''>hi@justhome.com</Link></div>
                                 <div><Link className='' to=''>(123) 456-7890</Link></div>
                            </div>
                        </div>

                        <div className='our-address-container'>
                            <div className='discover-text'>Our Address</div>
                            <div className='our-address-contact'>
                                <div className='address-app-text'>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</div>
                            </div>
                        </div>

                        <div className='get-app-container'>
                            <div className='discover-text get-app-text'>Get the app</div>
                            <div className='apple-google-container'>
                                <div className='apple-google-common'>
                                    <div className='apple-google-icon-wrapper'>
                                        <Link to=''><FaApple className='apple-google-icon' size={20} /></Link>
                                    </div>
                                    <div className='apple-google-border'></div>
                                    <div>
                                        <div className='download-link download-store-common-links '><Link>Download on the</Link></div>
                                        <div className='store-link download-store-common-links'><Link>Apple Store</Link></div>
                                    </div>
                                </div>
                                <div className='apple-google-common google-container '>
                                    <div className='apple-google-icon-wrapper'>
                                        <Link to=''><FaGooglePlay className='apple-google-icon' size={20} /></Link>
                                    </div>
                                    <div className='apple-google-border'></div>
                                    <div>
                                        <div className='download-link download-store-common-links'><Link>Download on the</Link></div>
                                        <div className='store-link download-store-common-links'><Link>Google Play</Link></div>
                                    </div>
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