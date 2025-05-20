import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import findproperties1 from '../assets/images/findproperties1.jpg'
import findproperties2 from '../assets/images/findproperties2.jpg'
import findproperties3 from '../assets/images/findproperties3.jpg'
import findproperties4 from '../assets/images/findproperties4.jpg'
import findproperties5 from '../assets/images/findproperties5.jpg'
import findproperties6 from '../assets/images/findproperties6.jpg'

export default function FindProperties() {
    return (
        <>
            <Container fluid className='find-properties-container'>
                <h2 className='heading mb-3'>Find Properties in These Cities</h2>
                <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Row className='mb-4'>
                    <Col lg={6} md={6} sm={12} xs={12} className='find-property-parent img1 find-property-common-margin'>
                        <div className='find-property-img'>
                            <img src={findproperties1}></img>
                        </div>
                        <div className='find-property-container'>
                            <div className='find-property-text'>8 Properties</div>
                            <div className='find-property-place'>New York</div>
                        </div>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12} className='find-property-parent find-property-common-margin2'>
                        <div className='find-property-img'>
                            <img src={findproperties2}></img>
                        </div>
                        <div className='find-property-container'>
                            <div className='find-property-text'>2 Properties</div>
                            <div className='find-property-place'>Chicago</div>
                        </div>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12} className='find-property-parent'>
                        <div className='find-property-img'>
                            <img src={findproperties3}></img>
                        </div>
                        <div className='find-property-container'>
                            <div className='find-property-text'>1 Properties</div>
                            <div className='find-property-place'>Los Angeles</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} md={3} sm={6} xs={12} className='find-property-parent find-property-common-margin2'>
                        <div className='find-property-img'>
                            <img src={findproperties4}></img>
                        </div>
                        <div className='find-property-container find-property-common-margin'>
                            <div className='find-property-text'>0 Properties</div>
                            <div className='find-property-place'>San Diego</div>
                        </div>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12} className='find-property-parent find-property-common-margin'>
                        <div className='find-property-img'>
                            <img src={findproperties5}></img>
                        </div>
                        <div className='find-property-container'>
                            <div className='find-property-text'>3 Properties</div>
                            <div className='find-property-place'>Florida</div>
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} className='find-property-parent'>
                        <div className='find-property-img'>
                            <img src={findproperties6}></img>
                        </div>
                        <div className='find-property-container'>
                            <div className='find-property-text'>2 Properties</div>
                            <div className='find-property-place'>Miami</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}