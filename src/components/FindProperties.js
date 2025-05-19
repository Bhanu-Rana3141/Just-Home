import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function FindProperties() {
    return (
        <>
            <Container fluid className='mt-5'>
                <h2 className='heading'>Find Properties in These Cities</h2>
                <div className='heading-para mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Row>
                    <Col lg={6} md={6} sm={12}></Col>
                    <Col lg={3} md={3} sm={12}></Col>
                    <Col lg={3} md={3} sm={12}></Col>
                </Row>

                <Row>
                    <Col lg={3} md={3} sm={12}></Col>
                    <Col lg={3} md={3} sm={12}></Col>
                    <Col lg={6} md={6} sm={12}></Col>
                </Row>
            </Container>
        </>
    )
}