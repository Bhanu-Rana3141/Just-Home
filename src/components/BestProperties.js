import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import properties1 from '../assets/images/properties1.jpg'
import properties2 from '../assets/images/properties2.jpg'
import properties3 from '../assets/images/properties3.jpg'
import { GoArrowRight } from "react-icons/go";

export default function BestProperties() {
    return (
        <Container fluid className='best-properties-container'>
            <h2 className='heading'>Best Properties</h2>
            <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <Row className='justify-content-between'>
                <Col lg={6} md={6} sm={12} className='properties-col1-container' >
                    <div className='properties-col1-part1'>
                        <img className='properties1-img common-img-properties' src={properties1}></img>
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
                            <img className='properties2-img' src={properties2}></img>
                        </div>
                    </div>

                </Col>
                <Col lg={6} md={6} sm={12} className='properties-col2'>
                    <div>
                        <img className='properties3-img common-img-properties' src={properties3}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
