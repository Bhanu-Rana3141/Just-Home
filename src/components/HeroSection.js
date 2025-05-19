import React, { useState } from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import heroImg from '../assets/images/hero-img.jpg'

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState('rent');

    return (
        <div className="hero-section">
            <img src={heroImg} alt="Hero" className="hero-img" />

            <Container fluid className='hero-container'>

                <div className='hero-content'>
                    <Button variant="outline-light" className="hero-button mb-4">
                        LET US GUIDE YOUR HOME
                    </Button>

                    <h1 className="hero-content-heading">Discover a place you'll,</h1>
                    <h1 className="hero-content-heading mb-4">love to live</h1>

                    <div className="tabs mb-3">
                        {['Sale', 'Rent'].map(tab => (
                            <div
                                key={tab}
                                className={`tab ${activeTab === tab ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>

                    <InputGroup className="search-box">
                        <Form.Control
                            type="text"
                            placeholder="Enter Name, Keywords..."
                            className="form-input-box"
                        />
                        <InputGroup.Text className='search-icon-container'>
                            <FaSearch className="search-icon" />
                        </InputGroup.Text>
                    </InputGroup>
                </div>
            </Container>
        </div>
    );
}