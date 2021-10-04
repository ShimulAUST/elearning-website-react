import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <Container >
            <div className="subscribe">
                <h3>Subscribe Us</h3>

                <Row>
                    <Col></Col>
                    <Col xs={9}><input type="email" placeholder="Enter your email" className="form-control"></input></Col>
                    <Col><button className="btn btn-success form-control btn-block">Subscribe</button></Col>
                </Row>

            </div>
        </Container>
    );
};

export default Subscribe;