import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import choose1 from '../assets/images/choose-us1.png'
import choose2 from '../assets/images/choose-us2.png'
import choose3 from '../assets/images/choose-us3.png'
import choose4 from '../assets/images/choose-us4.png'

export default function ChooseUs() {
    return (
        <>
            <Container fluid className='choose-us-container'>
                <h2 className='heading'>Why Choose Us</h2>
                <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <div className='choose-us-common'>
                            <div className='mb-4'>
                                <img src={choose1} alt=''></img>
                            </div>
                            <div className='choose-us-heading mb-3'>Find your future home</div>
                            <div className='choose-us-content-line'>We help you find a new home by offering a
                                smart real estate experience</div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className='choose-us-common'>
                            <div className='mb-4'>
                                <img src={choose2} alt=''></img>
                            </div>
                            <div className='choose-us-heading mb-3'>Experienced agents</div>
                            <div className='choose-us-content-line'>Find an experienced agent who knows your
                                market best</div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className='choose-us-common'>
                            <div className='mb-4'>
                                <img src={choose3} alt=''></img>
                            </div>
                            <div className='choose-us-heading mb-3'>Buy or rent homes</div>
                            <div className='choose-us-content-line'>Millions of houses and apartments in your
                                favourite cities</div>
                        </div></Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className='choose-us-common'>
                            <div className='mb-4'>
                                <img src={choose4} alt=''></img>
                            </div>
                            <div className='choose-us-heading mb-3'>List your own property</div>
                            <div className='choose-us-content-line'>Sign up now and sell or rent your own
                                properties</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}