import React from 'react';
import Topics from '../Topics/Topics';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
const QuizTopic = () => {
    const datas = useLoaderData();
    const topics = datas.data;
    return (
        <div>
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

export default QuizTopic;