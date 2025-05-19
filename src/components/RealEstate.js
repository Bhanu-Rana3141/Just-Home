import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RealEstate() {
    return (
        <>
            <Container fluid className='real-estate-container'>
                <Row className='mb-4'>
                    <Col lg={12} md={12} sm={12}>
                        <div className='links-container'>
                            <div className='common-links'>Real Estate</div>
                            <div className='common-links'>New Homes</div>
                            <div className='common-links'>Popular Area</div>
                            <div className='common-links'>Popular Searches</div>
                        </div>
                    </Col>
                </Row>

                <div className='real-estate-flex-wrapper'>
                    {[...Array(5)].map((_, index) => (
                        <div className='real-estate-links' key={index}>
                            <ul className='common-link-containter'>
                                <li className='common-link-content'><Link to=''>Real Estate NY</Link></li>
                                <li className='common-link-content'><Link to=''>Real Estate Brooklyn</Link></li>
                                <li className='common-link-content'><Link to=''>Real Estate Queens</Link></li>
                                <li className='common-link-content'><Link to=''>Real Estate The Bronx</Link></li>
                                <li className='common-link-content'><Link to=''>Real Estate Staten</Link></li>
                                <li className='common-link-content'><Link to=''>Real Estate Jersey</Link></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Container >
        </>
    )
}
