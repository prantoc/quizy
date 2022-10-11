import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import sliderGif from '../../assets/animation_500_l942uvif.gif'
import Topics from '../Topics/Topics';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const datas = useLoaderData();
    const topics = datas.data;
    return (
        <div>
            <Container fluid className='cs-border shadow p-lg-3 mb-lg-5 rounded'>
                <Row>
                    <Col className='slider-text' lg={6} md={6} sm={12}>
                        <h1 className='text-warning p-4'>Quziy is an quiz app</h1>
                        <h4 className='text-white p-2'>Which helps you understand your coding knowledge through the quiz test.</h4>
                        <p className='text-white p-4'>Take your test today by <span className='text-warning fw-bold font-size-lg'>Quzi</span></p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className='img-fluid h-100' src={sliderGif} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 pt-3'>
                <Row>
                    <Col md={12} className="mb-3">
                        <h1 className='text-center text-white'>Quiz Topics</h1>
                    </Col>
                    {
                        topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)

                    }
                </Row>

            </Container>
        </div>
    );
};

export default Home;