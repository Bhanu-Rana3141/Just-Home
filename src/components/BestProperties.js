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

    const images = [properties1, properties1, properties1, properties1];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Container fluid className='best-properties-container'>
            <h2 className='heading'>Best Properties</h2>
            <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <Row className='justify-content-between'>
                <Col lg={6} md={6} sm={12} className='properties-col1-container' >
                    <div className='properties-col1-part1'>
                        {/* Slider with ref */}
                        <Slider ref={sliderRef} {...settings}>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img className='properties1-img common-img-properties' src={img} alt={`property-${index}`} />
                                </div>
                            ))}
                        </Slider>
                        <span
                            className='properties-left-arrow properties-common-arrow'
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <BsChevronLeft />
                        </span>
                        <span
                            className='properties-right-arrow properties-common-arrow'
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <BsChevronRight />
                        </span>
                    </div>

                    <div className='properties-col1-part2'>
                        <div className='properties-col1-part2-card '>
                            <div>
                                <h2 className='properties-card-text properties-heading'>280+</h2>
                                <div className='properties-card-text properties-text'>Properties</div>
                            </div>
                            <div className='properties-card-text properties-description'>Explore our wide variety of properties to fid your dream home today</div>
                            <div className='properties-arrow'>
                                <GoArrowRight className='properties-right-icon' />
                            </div>
                        </div>
                        <div className='properties2-img-container'>
                            <div>
                                <img className='properties2-img' src={properties2}></img>
                            </div>

                            <div className='play-btn'>
                                <IoPlayOutline size={20} className='play-btn-icon' />
                            </div>

                        </div>
                    </div>

                </Col>
                <Col lg={6} md={6} sm={12} className='properties-col2'>
                    <div className='properties3-img-container'>
                        <img className='properties3-img common-img-properties' src={properties3}></img>
                        <div className='properties3-img-overlay'></div>
                    </div>

                    <div className='sale-featured-btn'>
                        <button className='sale-btn'>FOR SALE</button>
                        <button className='featured-btn'>FEATURED</button>
                    </div>

                    <div className='properties3-img-bottom-part'>
                        <div className='villa-heading mb-2'>Villa One Hyde Park</div>
                        <div className='villa-location mb-2'>  <CiLocationOn size={20} />  <span>2050 Bloomingdale Ave</span> </div>
                        <div className='properties3-bottom-container'>
                            <div className='villa-price'>$120,000</div>
                            <div className='properties3-bottom-bedBathSqrt'>
                                <div className='properties3-common'>
                                    <div className='bottom-bedBathSqrt-img'> <img src={bed}></img> </div>
                                    <div className='properties3-common-number'>4</div>
                                </div>
                                <div className='properties3-common'>
                                    <div className='bottom-bedBathSqrt-img'> <img src={bath}></img> </div>
                                    <div className='properties3-common-number'>2</div>
                                </div>
                                <div className='properties3-common'>
                                    <div className='bottom-bedBathSqrt-img'> <img src={sqrt}></img> </div>
                                    <div className='properties3-common-number'>350</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}