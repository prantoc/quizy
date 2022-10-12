import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
const QuestionOption = ({ allquestion, checkAns, total, index, setIs }) => {
    const { id, question, correctAnswer, options } = allquestion;
    const [showAns, setShowAns] = useState(false);
    return (
        <div>
            <Card className='shadow-lg mb-5 rounded text-center'>
                <Card.Body>
                    <Card.Title >
                        <Row>
                            <Col className='col-6 text-start'>
                                <small style={{ fontSize: "13px" }}>{index + 1} out of {total} Quiz</small>
                            </Col>
                            <div className="col-6 d-flex justify-content-end" onClick={() => setShowAns(!showAns)}>
                                {
                                    showAns ?
                                        <EyeSlashIcon style={{ cursor: "pointer" }} title='Check The Correct Answer' width={20} height={25} />
                                        :
                                        <EyeIcon style={{ cursor: "pointer" }} title='Hide The Correct Answer' width={20} height={25} />
                                }

                            </div>
                            <Col className='col-12 py-4 mb-2'>
                                {question.replace(/(<([^>]+)>)/ig, '')}
                            </Col>

                        </Row>
                    </Card.Title>
                    <Row>
                        {
                            options?.map((op, i) => (
                                <Col lg={6} md={12} sm={12} key={i}>
                                    <label
                                        className="form-check-label m-2 p-4 rounded d-flex justify-content-start border border-primary"
                                        htmlFor={`flexRadioDefault${op}`} onClick={() => { checkAns(id, i, options, correctAnswer, id + i); setIs() }}>
                                        <input className="form-check-input p-2 me-2" type="radio" name={`flexRadioDefault${id}`} id={`flexRadioDefault${op}`} />
                                        {op}
                                    </label>
                                </Col>
                            ))
                        }

                        {
                            showAns ?
                                <Col lg={12} md={12} sm={12} className="border border-success p-4 mt-5 rounded">
                                    {correctAnswer}
                                </Col>
                                : ""
                        }

                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
};

export default QuestionOption;