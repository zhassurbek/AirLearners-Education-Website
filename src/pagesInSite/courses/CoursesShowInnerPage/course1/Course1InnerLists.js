import React, {useState} from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Col, Container} from "reactstrap";
import CourseCard from "../../coursesList/CourseCard";



const lessonsData = [
    {
        title: "Урок 1. 2ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 1",
        description: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
        // https://via.placeholder.com/150
    },
    {
        title: "Урок 2. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 2",
        description: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
    {
        title: "Урок 3. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 3",
        description: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
];

const Course1InnerInMainPage = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleOnClick = () => {
        setIsCompleted(true);
    };
    {
        lessonsData.map((itemLessonsData) => (
            <Col lg="4" md="6" sm="6">
                <CourseCard key={itemLessonsData.id} itemLessonsData={itemLessonsData}/>
            </Col>
        ))
    }

    return (
        <Container>
            <section>
                <ListGroup>
                    {lessonsData.map((course, index) => (
                        <ListGroup.Item key={index}>
                            <Card>
                                <Card.Img variant="top" src={course.image}/>
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    {!isCompleted && (
                                        <Link to={`/lesson/0${index + 1}`}>
                                            <Button>Перейти</Button>
                                        </Link>
                                    )}
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </section>
        </Container>
    );
};

export default Course1InnerInMainPage;