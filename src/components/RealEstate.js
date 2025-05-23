import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RealEstate() {

    const [activeTab, setActiveTab] = useState('Real Estate');

    const tabs = ['Real Estate', 'New Homes', 'Popular Area', 'Popular Searches'];

    const dataMap = {
        'Real Estate': [
            'Real Estate NY',
            'Real Estate Brooklyn',
            'Real Estate Queens',
            'Real Estate The Bronx',
            'Real Estate Staten',
            'Real Estate Jersey',
        ],
        'New Homes': [
            'New Homes NY',
            'New Homes Brooklyn',
            'New Homes Queens',
            'New Homes The Bronx',
            'New Homes Staten',
            'New Homes Jersey',
        ],
        'Popular Area': [
            'Popular NY',
            'Popular Brooklyn',
            'Popular Queens',
            'Popular The Bronx',
            'Popular Staten',
            'Popular Jersey',
        ],
        'Popular Searches': [
            'Search NY',
            'Search Brooklyn',
            'Search Queens',
            'Search The Bronx',
            'Search Staten',
            'Search Jersey',
        ],
    };

    return (
        <Container fluid className='real-estate-container'>
            <Row className='mb-4'>
                <Col lg={12} md={12} sm={12}>
                    <div className='links-container'>
                        {tabs.map(tab => (
                            <div
                                key={tab}
                                className={`common-links ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='real-estate-flex-wrapper'>
                        {[...Array(5)].map((_, index) => (
                            <div className='real-estate-links' key={index}>
                                <ul className='common-link-containter'>
                                    {dataMap[activeTab].map((text, idx) => (
                                        <li className='common-link-content' key={idx}>
                                            <Link to=''>{text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}