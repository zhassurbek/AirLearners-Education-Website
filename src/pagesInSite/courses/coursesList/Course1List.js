import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const courses = [
    {
        title: "Курс 1",
        description: "Описание курса 1",
        image: "",
        // https://via.placeholder.com/150
    },
    {
        title: "Курс 2",
        description: "Описание курса 2",
        image: "",
    },
    {
        title: "Курс 3",
        description: "Описание курса 3",
        image: "",
    },
];

const Course1List = () => {
    return (
        <ListGroup>
            {courses.map((course, index) => (
                <ListGroup.Item key={index}>
                    <Card>
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Course1List;