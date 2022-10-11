import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import sliderGif from '../../assets/animation_300_l940qxus.gif'
import sliderImg from '../../assets/undraw_Online_test_re_kyfx.png'
const Home = () => {
    return (
        <div>
            <Container fluid className='cs-border shadow p-3 mb-5 rounded'>
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
        </div>
    );
};

export default Home;