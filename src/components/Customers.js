import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import startsImg from '../assets/images/stars.png';
import customer1 from '../assets/images/customer1.png';
import comma from '../assets/images/comma.png';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import Slider from 'react-slick';

export default function Customers() {

    const reviews = [
        {
            name: "Cameron Williamson",
            title: "Designer",
            text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
        },
        {
            name: "Sarah Johnson",
            title: "Product Manager",
            text: "dores. et labore ut incididunt tempor eiusmod do sed elit, adipiscing consectetur amet sit dolor ipsum Lorem. great. Works estimator. loan the and comparisons, property multiplexes, for Searches",
        },
        {
            name: "Mark Thompson",
            title: "Developer",
            text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
        },
        {
            name: "Emily Davis",
            title: "Architect",
            text: "dores. et labore ut incididunt tempor eiusmod do sed elit, adipiscing consectetur amet sit dolor ipsum Lorem. great. Works estimator. loan the and comparisons, property multiplexes, for Searches",
        },
        {
            name: "Michael Lee",
            title: "Consultant",
            text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
        }
    ];

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <Container fluid className='customers-container'>
            <Row className='customer-container-row1 justify-content-between'>
                <Col lg={5} md={6} sm={6} className='customers-col1'>
                    <h2 className='customer-common-color'>What our customers are saying us?</h2>
                    <div className='customers-col1-description customer-common-color'>
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </div>
                    <div className='rating-container'>
                        <div className='rating-container1'>
                            <div className='rating customer-common-color'>10m+</div>
                            <div className='people-overall-rating customer-common-color'>Happy People</div>
                        </div>
                        <div className='rating-container2'>
                            <div className='rating customer-common-color'>4.88</div>
                            <div className='people-overall-rating customer-common-color'>Overall rating</div>
                            <img src={startsImg} alt="rating stars" />
                        </div>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={6} className='customers-col2'>
                    <Slider ref={sliderRef} {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className='review-slide'>
                                <div className='customers-col2-customer-info'>
                                    <div className='customers-img-name'>
                                        <img className='customer-img' src={customer1} alt="Customer" />
                                        <div className='customer-name-container'>
                                            <div className='customer-name customer-common-color'>
                                                {review.name}
                                            </div>
                                            <div className='customer-designer customer-common-color'>
                                                {review.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comma'>
                                        <img src={comma} alt="quote" />
                                    </div>
                                </div>

                                <div className='customers-col2-description customer-common-color'>
                                    {review.text}
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='customers-arrow'>
                        <div className='customers-arrows' onClick={() => sliderRef.current?.slickPrev()}>
                            <BsChevronLeft />
                        </div>
                        <div className='customers-arrows' onClick={() => sliderRef.current?.slickNext()}>
                            <BsChevronRight />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='customer-container-row2 '>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className='row2-description'>Thousands of world’s leading companies trust Space</div>
                    <div className="logo-slider-container">
                        <div className="logo-slider-track">
                            {logos.concat(logos).map((logo, index) => (
                                <div className="logo-slide" key={index}>
                                    <img src={logo} alt={`logo-${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}