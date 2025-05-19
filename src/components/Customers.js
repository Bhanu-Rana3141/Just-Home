import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import startsImg from '../assets/images/stars.png'
import customer1 from '../assets/images/customer1.png'
import comma from '../assets/images/comma.png'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
import { Link } from 'react-router-dom'

export default function Customers() {

    return (
        <Container fluid className='customers-container'>
            <Row className='justify-content-between'>
                <Col lg={5} md={6} sm={12} className='customers-col1'>
                    <h2 className='customer-common-color'>What our customers are saying us?</h2>
                    <div className='customers-col1-description customer-common-color'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</div>
                    <div className='rating-container'>
                        <div className='rating-container1'>
                            <div className='rating customer-common-color'>10m+</div>
                            <div className='people-overall-rating customer-common-color'>Happy People</div>
                        </div>
                        <div className='rating-container2'>
                            <div className='rating customer-common-color'>4.88</div>
                            <div className='people-overall-rating customer-common-color'>Overall rating</div>
                            <img src={startsImg}></img>
                        </div>
                    </div>
                </Col>

                <Col lg={5} md={6} sm={12} className='customers-col2'>
                    <div className='customers-col2-customer-info'>
                        <div className='customers-img-name'>
                            <img className='customer-img' src={customer1} ></img>
                            <div className='customer-name-container'>
                                <div className='customer-name customer-common-color'>Cameron Williamson</div>
                                <div className='customer-designer customer-common-color'>Designer</div>
                            </div>
                        </div>
                        <div className='comma'>
                            <img src={comma}></img>
                        </div>
                    </div>

                    <div className='customers-col2-description customer-common-color'>
                        Searches for multiplexes, property comparisons, and the loan
                        estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dores.
                    </div>
                    <div className='customers-arrow'>
                        <div className='customers-arrows'><BsChevronLeft /></div>
                        <div className='customers-arrows'><BsChevronRight /></div>
                    </div>
                </Col>
            </Row>

            <div className='row1-row2-border'></div>

            <Row className='customer-container-row2 '>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='customer-common-color row2-description'>Thousands of world’s leading companies trust Space</div>
                    <div className='logo-marquee-container'>
                        <div className='logo-marquee'>
                            <ul>
                                <li className='logo-marquee-img-parent'><Link><img src={logo1} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo2} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo3} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo4} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo5} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo6} alt="Logo 1" /></Link></li>
                                {/* Duplicate logos for smooth loop */}
                                <li className='logo-marquee-img-parent'><Link><img src={logo1} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo2} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo3} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo4} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo5} alt="Logo 1" /></Link></li>
                                <li className='logo-marquee-img-parent'><Link><img src={logo6} alt="Logo 1" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
