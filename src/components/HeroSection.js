import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import heroImg from '../assets/images/hero-img.jpg'

export default function HeroSection() {

    const [activeTab, setActiveTab] = useState('Sale');

    return (
        <div className="hero-section">
            <div className='hero-img-container'>
                <img src={heroImg} alt="Hero" className="hero-img" />
            </div>

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

                    <div className='search-bar'>
                        <input type='text' placeholder='Enter Name, Keywords...' />
                        <div className='search-icon-container'>
                            <GoSearch className='search-icon' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}