import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const courses = [
    {
        title: "Урок 1",
        description: "Описание курса 1",
        image: "",
        // https://via.placeholder.com/150
    },
    {
        title: "Урок 2",
        description: "Описание курса 2",
        image: "",
    },
    {
        title: "Урок 3",
        description: "Описание курса 3",
        image: "",
    },
];

const Course1InnerInMainPage = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleOnClick = () => {
        setIsCompleted(true);
    };

    return (
        <ListGroup>
            {courses.map((course, index) => (
                <ListGroup.Item key={index}>
                    <Card>
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                            {!isCompleted && (
                                <Link to={`/course/03/lesson${index + 1}`}>
                                    <Button>Перейти</Button>
                                </Link>
                            )}
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Course1InnerInMainPage;