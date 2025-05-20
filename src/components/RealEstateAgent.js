import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function RealEstateAgent() {
    return (
        <Container fluid className='real-estate-agent-container'>
            <Row>
                <Col lg={12}>
                    <div className='agent-container'>
                        <div className='agent-content'>
                            <div className='agent-content-heading'>Become a Real Estate Agent</div>
                            <div className='mt-2 agent-content-description'>We only work with the best companies around the globe</div>
                        </div>
                        <button className='agent-register-btn'>Register Now <span><FaArrowRightLong /></span> </button>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}
