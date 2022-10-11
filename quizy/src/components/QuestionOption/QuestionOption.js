import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'
const QuestionOption = ({ allquestion }) => {
    const { id, question, correctAnswer, options } = allquestion;

    const checkAns = (pid, i) => {
        const gCosOp = (pid === id && options[i]); //gCosOp = getChoosenOption

        console.log(getVal);
    }
    // console.log(options);
    return (
        <div>
            <Card className='shadow-lg mb-5 rounded text-center'>
                <Card.Body>
                    <Card.Title >
                        <Row>
                            <Col className='col-11 py-4 mb-2'>
                                {question.replace(/(<([^>]+)>)/ig, '')}
                            </Col>
                            <div className="col-1 d-flex justify-content-end">
                                <EyeIcon style={{ cursor: "pointer" }} title='Check The Correct Answer' width={20} height={25} />
                            </div>
                        </Row>
                    </Card.Title>
                    <Row>
                        {
                            options.map((op, i) => (
                                <Col lg={6} md={12} sm={12} key={i}>
                                    <label className="form-check-label m-2 p-4 rounded d-flex justify-content-start border border-primary" htmlFor={`flexRadioDefault${op}`} onClick={() => checkAns(id, i)}>
                                        <input className="form-check-input p-2 me-2" type="radio" name={`flexRadioDefault${id}`} id={`flexRadioDefault${op}`} />
                                        {op}
                                    </label>
                                </Col>
                            ))
                        }

                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
};

export default QuestionOption;