import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
    const datas = useLoaderData();
    const topics = datas.data;
    const topicNames = topics.map(topic => topic.name)
    const topicQuizs = topics.map(topic => topic.total)
    const data = {
        labels: topicNames,
        datasets: [
            {
                label: '# of Votes',
                data: topicQuizs,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="mx-auto h-50 w-50">
                            <Pie data={data} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Statistics;