import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import HomeCourosel from '../HomeCourosel/HomeCourosel';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css';
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    const items = courses.slice(0, 3)

    return (
        <div>
            <HomeCourosel></HomeCourosel>
            <Container className="serviceSection">
                <div className="row mt-5">
                    {
                        items.map(course => <Course
                            key={course.id}
                            course={course}
                        />)
                    }
                </div>
            </Container>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;