import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './Quiz.css'
import QuestionOption from '../QuestionOption/QuestionOption';
import { error, success } from '../../Toast/Toast';
import { Flip, ToastContainer } from 'react-toastify';
const Quiz = () => {
    const datas = useLoaderData();
    const quizs = datas.data;
    const { name, questions, total } = quizs;
    const [cAns, setCAns] = useState(0);
    const checkAns = (pid, i, options, correctAnswer, hh) => {
        console.log(hh);
        const getItem = questions.find(q => q.id === pid);
        const gCosOp = (pid === getItem.id && options[i]); //gCosOp = getChoosenOption
        if (gCosOp === correctAnswer) {
            success(pid + i);
            if (pid === getItem.id && pid + i === hh) {
                setCAns(cAns + 1);
            }
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
                            questions.map((q, i) => <QuestionOption total={total} checkAns={checkAns} key={q.id} allquestion={q} index={i}></QuestionOption>)
                        }

                    </Col>
                    <Col lg={4} md={6}>
                        <Card className='shadow-lg mb-5 rounded sticky-lg-top'>
                            <Card.Body>
                                <Card.Title >
                                    <Row>
                                        <Col className='col-12'>
                                            Total- {total}
                                        </Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text>
                                    Correct Ans- {cAns}

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