import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import articleNews1 from '../assets/images/article-news1.jpg'
import articleNews2 from '../assets/images/article-news2.jpg'
import articleNews3 from '../assets/images/article-news3.jpg'
import articleNews4 from '../assets/images/article-news4.jpg'
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import ArticleNewsCard from './ArticleNewsCard'

export default function RecentArticlesNews() {
    return (
        <Container fluid className='article-news-container'>
            <h2 className='heading'>Recent Articles & News</h2>
            <div className='heading-para mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

            <Row>
                <Col lg={3} md={6} sm={6}>
                    <ArticleNewsCard
                        image={articleNews1}
                        place='Apartment'
                        date=' March 19, 2024'
                        description='Housing Markets That Changed the Most This Week'
                        read='Read More'
                    />
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ArticleNewsCard
                        image={articleNews2}
                        place='Apartment'
                        date=' March 19, 2024'
                        description='Read Unveils the Best Canadian Cities for Biking'
                        read='Read More'
                    />
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ArticleNewsCard
                        image={articleNews3}
                        place='Office'
                        date=' March 19, 2024'
                        description='10 Walkable Cities Where You Can Live Affordably'
                        read='Read More'
                    />
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ArticleNewsCard
                        image={articleNews4}
                        place='Shop'
                        date=' March 19, 2024'
                        description='New Apartment Nice in the Best Canadian Cities'
                        read='Read More'
                    />
                </Col>
            </Row>
        </Container>
    )
}