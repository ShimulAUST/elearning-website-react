import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Course = (props) => {

    const course = props.course;
    console.log(props);

    return (
        <div className="col-md-4 g-5">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={course.img} height="250px" />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>{course.programmeName}</Card.Title>
                        <Card.Text>
                            <h2>$ {course.price}</h2>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-success form-control btn-block">Buy Now</button>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </div>
    );
};

export default Course;