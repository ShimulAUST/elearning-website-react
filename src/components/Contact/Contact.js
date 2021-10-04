import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container className="mt-5">
                <h2>Contact Us</h2>
                <p>
                    Please send your message below. We will get back to you at the earliest!
                </p>
                <Row>
                    <form method="" id="">

                        <Row>

                            <Col className="form-group">
                                <label for="message">
                                    Message: </label>
                                <textarea class="form-control" type="textarea" id="message" name="message" maxlength="6000" rows="7"></textarea>
                            </Col>

                        </Row>

                        <Row>
                            <Col className="form-group">
                                <label for="name">
                                    Your Name:</label>
                                <input type="text" class="form-control" id="name" name="name" required />
                            </Col>
                            <Col className="form-group">

                                <label for="email">
                                    Email: </label>
                                <input type="email" class="form-control" id="email" name="email" required />
                            </Col>
                        </Row>
                        <Row>

                            <Col className="form-group">
                                <button type="submit" className="btn form-control btn-lg btn-success mt-5" >Send →</button>
                            </Col>

                        </Row>


                    </form>
                </Row>
            </Container>
        </div >
    );
};

export default Contact;