import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import './Service.css';
const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <Container className="services">
            <div className="mt-5">
                <h2>Our Services</h2>
            </div>

            <div className="row">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </Container>
    );
};

export default Services;