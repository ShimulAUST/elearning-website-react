import React from 'react';
import { Container } from 'react-bootstrap';

import img from '../../images/about.jpg'
import './About.css';
const About = () => {
    return (
        <div >
            <div className="aboutImage">
                <img src={img} alt="" />
            </div>
            <Container className="">
                <div className="mt-5">
                    <h3> We Are Elearning Master </h3>
                    <p>We provide 360 degree support in any types of programming related things.</p>
                    <p><small>An online learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools and resources to support and enhance education delivery and management. One type of eLearning platform is a learning management system (LMS).</small></p>
                </div>
                <div className="aboutLastSection">
                    <h3> Want to Know more about Us </h3>
                    <div className="text-center mb-5">
                        <button className="btn btn-success">Subscribe Us</button>
                    </div>
                </div>

            </Container>



        </div>
    );
};

export default About;