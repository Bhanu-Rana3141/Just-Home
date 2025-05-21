import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import HomeCard from './HomeCard';
import home1 from '../assets/images/home1.jpg'
import home2 from '../assets/images/home2.jpg'
import home3 from '../assets/images/home3.jpg'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function HomesForYou() {

    const cardData = [
        { image: home1, btn: 'FOR SALE', name: 'Skyper Pool Apartment', price: '$280,000', address: '1020 Bloomingdale Ave', beds: '4 Beds', baths: '4 Beds', sqrt: '450 sqft' },
        { image: home2, btn: 'FOR RENT', name: 'North Dillard Street', price: '$250', duration: '/month', address: '4330 Bell Shoals Rd', beds: '4 Beds', baths: '4 Beds', sqrt: '400 sqft' },
        { image: home3, btn: 'FOR SALE', btn2: 'FEATURED', name: 'Eaton Garth Penthouse', price: '$180,000', address: '7722 18th Ave, Brooklyn', beds: '4 Beds', baths: '4 Beds', sqrt: '450 sqft' },
    ]

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <BsChevronLeft />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <BsChevronRight />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            <Container fluid className='homes-for-you-container'>
                <h2 className='heading mb-3'>Homes For You</h2>
                <div className='heading-para mb-4'>Based on your view history</div>
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div className='homes-card-container-parent' key={index}>
                            <HomeCard {...card} />
                        </div>
                    ))}
                </Slider>
            </Container>
        </>
    )
}