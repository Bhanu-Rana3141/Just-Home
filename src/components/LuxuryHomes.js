import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import luxuryHomes from '../assets/images/luxuryHomes.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import usersImg from '../assets/images/users.png'

export default function LuxuryHomes() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <Container fluid className='luxury-homes-container'>
            <Row className='d-flex justify-content-between align-items-center'>
                <Col lg={5} md={5} sm={12}>
                    <div className='img-users-container'>
                        <img className='luxury-home-img' src={luxuryHomes} alt="Luxury Home" />
                        <div className='users-clients-container'>
                            <img className='users-img' src={usersImg}></img>
                            <div className='client-container'>
                                <div className='total-clients'>Total Clients</div>
                                <div className='client-number'>7,000M</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className='luxury-content-container'>
                        <h2 className='luxury-heading luxury-heading1'>Local expertise for</h2>
                        <h2 className='luxury-heading'>luxury homes</h2>
                        <div className='mt-3 luxury-description text-start'>
                            Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut
                            morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla acdictum ut mauris non.
                        </div>
                        <button className='mt-3 agent-register-btn'>
                            Learn More <FaArrowRightLong />
                        </button>
                    </div>
                </Col>
            </Row>

            <Row ref={ref} className='numbers-container text-center'>
                <Col lg={3} md={6} sm={6} className='numbers-container-col'>
                    <div className='million-number'>
                        <CountUp start={0} end={inView ? 18 : 0} duration={2} suffix="M" />
                    </div>
                    <div className='million-dollar-content'>Owned from properties transactions</div>
                </Col>

                <Col lg={3} md={6} sm={6} className='numbers-container-col'>
                    <div className='million-number'>
                        <CountUp start={0} end={inView ? 26 : 0} duration={2} suffix="K" />
                    </div>
                    <div className='million-dollar-content'>Properties for Buy</div>
                </Col>

                <Col lg={3} md={6} sm={6} className='numbers-container-col'>
                    <div className='million-number'>
                        <CountUp start={0} end={inView ? 15 : 0} duration={2} suffix="K" />
                    </div>
                    <div className='million-dollar-content'>Properties for Sell</div>
                </Col>

                <Col lg={3} md={6} sm={6} className='numbers-container-col'>
                    <div className='million-number'>
                        <CountUp start={0} end={inView ? 800 : 0} duration={2} />
                    </div>
                    <div className='million-dollar-content'>Daily completed transactions.</div>
                </Col>
            </Row>
        </Container>
    )
}