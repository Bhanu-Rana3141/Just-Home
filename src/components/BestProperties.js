import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import properties1 from '../assets/images/properties1.jpg'
import properties2 from '../assets/images/properties2.jpg'
import properties3 from '../assets/images/properties3.jpg'
import { GoArrowRight } from "react-icons/go";
import { CiLocationOn } from 'react-icons/ci'
import bed from '../assets/images/bestpropertybed.png'
import bath from '../assets/images/bestPropertyBath.png'
import sqrt from '../assets/images/bestPropertySqrt.png'
import { IoPlayOutline } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Slider from 'react-slick'

export default function BestProperties() {

    const sliderRef = useRef(null);

    const images = [properties1, properties1, properties1, properties1, properties1];

    const settings = {
        dots: false,
        arrows: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container fluid className='best-properties-container'>
            <h2 className='heading'>Best Properties</h2>
            <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

            <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
                            <div className='properties1-img-parent'>
                                <Slider ref={sliderRef} {...settings}>
                                    {images.map((img, index) => (
                                        <div
                                            key={index}
                                            className='best-properties-img1-container common-properties-img-container'
                                        >
                                            <img src={img} alt={`Slide ${index}`} />
                                        </div>
                                    ))}
                                </Slider>
                                <div
                                    className='properties1-left-arrow-container properties1-icon-common-container'
                                    onClick={() => sliderRef.current?.slickPrev()}
                                >
                                    <BsChevronLeft className='properties1-icon-color' />
                                </div>
                                <div
                                    className='properties1-right-arrow-container properties1-icon-common-container'
                                    onClick={() => sliderRef.current?.slickNext()}
                                >
                                    <BsChevronRight className='properties1-icon-color' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='property2-card-container'>
                        <Col lg={6} md={6} sm={6} xs={12}>
                            <div className='col-card-height-parent'>
                                <div className='col-card-part-container'>
                                    <div className='col-card-common-color col-card-heading'>280+</div>
                                    <div className='col-card-common-color col-card-properties'>Properties</div>
                                    <div className='col-card-common-color col-card-description'>Explore our wide variety of properties to fid your dream home today</div>
                                    <div className='col-card-right-icon-container'>
                                        <GoArrowRight className='col-card-right-icon' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className='properties2-col-container'>
                            <div className='properties2-img-parent'>
                                <div className='best-properties-img2-container common-properties-img-container'>
                                    <img src={properties2}></img>
                                </div>
                                <div className='play-btn-container'>
                                    <IoPlayOutline size={20} className='play-btn-icon' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} md={12} sm={12} xs={12} className='margin-top-991'>
                    <div className='properties3-img-parent'>
                        <div className='best-properties-img3-container common-properties-img-container'>
                            <img src={properties3}></img>
                            <div className='gradient-overlay'></div>
                        </div>

                        <div className='sale-featured-btn'>
                            <button className='sale-btn'>FOR SALE</button>
                            <button className='featured-btn'>FEATURED</button>
                        </div>

                        <div className='properties3-img-bottom-part'>
                            <div className='villa-heading mb-2'>Villa One Hyde Park</div>
                            <div className='villa-location mb-2'>
                                <CiLocationOn size={20} />
                                <span>2050 Bloomingdale Ave</span>
                            </div>
                            <div className='properties3-bottom-container'>
                                <div className='villa-price'>$120,000</div>
                                <div className='properties3-bottom-bedBathSqrt'>
                                    <div className='properties3-common'>
                                        <div className='bottom-bedBathSqrt-img'>
                                            <img src={bed} alt="bed" />
                                        </div>
                                        <div className='properties3-common-number'>4</div>
                                    </div>
                                    <div className='properties3-common'>
                                        <div className='bottom-bedBathSqrt-img'>
                                            <img src={bath} alt="bath" />
                                        </div>
                                        <div className='properties3-common-number'>2</div>
                                    </div>
                                    <div className='properties3-common'>
                                        <div className='bottom-bedBathSqrt-img'>
                                            <img src={sqrt} alt="area" />
                                        </div>
                                        <div className='properties3-common-number'>350</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}