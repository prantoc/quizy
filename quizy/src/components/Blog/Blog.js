import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col col={12}>
                        <Card className='shadow-lg mb-5 rounded'>
                            <Card.Body>
                                <Card.Title >
                                    what is the purpose of react router?
                                </Card.Title>
                                <Card.Text>
                                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='shadow-lg mb-5 rounded'>
                            <Card.Body>
                                <Card.Title >
                                    how does context api work?
                                </Card.Title>
                                <Card.Text>
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='shadow-lg mb-5 rounded'>
                            <Card.Body>
                                <Card.Title >
                                    useRef hook
                                </Card.Title>
                                <Card.Text>
                                    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue )
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;