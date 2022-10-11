import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './Quiz.css'
import QuestionOption from '../QuestionOption/QuestionOption';
import { error, success } from '../../Toast/Toast';
import { Flip, ToastContainer } from 'react-toastify';
const Quiz = () => {
    const datas = useLoaderData();
    const quizs = datas.data;
    const { id, name, questions } = quizs;
    const checkAns = (pid, i, options, correctAnswer) => {
        const getItem = questions.find(q => q.id === pid);
        const gCosOp = (pid === getItem.id && options[i]); //gCosOp = getChoosenOption
        if (gCosOp === correctAnswer) {
            success(pid + i);
        } else {
            error(pid + i);
        }
    }

    return (
        <div>
            <ToastContainer transition={Flip} />
            <Container className='my-5 py-3'>
                <Row>
                    <Col md={12} className="mb-3">
                        <h1 className='text-center text-white'>Quiz Of {name}</h1>
                    </Col>
                    <Col lg={8} md={6}>
                        {
                            questions.map(q => <QuestionOption checkAns={checkAns} key={q.id} allquestion={q}></QuestionOption>)
                        }

                    </Col>
                    <Col lg={4} md={6}>
                        <Card className='shadow-lg mb-5 rounded'>
                            <Card.Body>
                                <Card.Title >
                                    <Row>
                                        <Col className='col-10'>
                                            {name}
                                        </Col>
                                        <div className="col-2 d-flex justify-content-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path>
                                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path>
                                            </svg>
                                        </div>
                                    </Row>
                                </Card.Title>
                                <Card.Text>
                                    {id === 1 ? 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'.slice(0, 100) : id === 2 ? 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'.slice(0, 100) : id === 3 ? 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' : 'Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code'.slice(0, 100)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Quiz;