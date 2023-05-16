import React, {useState} from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Col, Container} from "reactstrap";
import CourseCard from "../../coursesList/CourseCard";

// PAGE /course/01

const lessonsData = [
    {
        title: "Урок 1. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 1",
        description: "...",
        quizTitle: "Тест по уроку 1",
        quizDescription: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
    {
        title: "Урок 2. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 2",
        description: "...",
        quizTitle: "Тест по уроку 1",
        quizDescription: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
    {
        title: "Урок 3. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ 3",
        description: "...",
        image: "",
        quizTitle: "Тест по уроку 1",
        quizDescription: "...",
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
                                {/*для блока информации про урок(title, description)*/}
                                <Card.Body style={{border: '1px solid #f5f5f5', margin: '3px', borderRadius: '7px'}}>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    {!isCompleted && (
                                        <Link to={`/lesson/0${index + 1}`}>
                                            <Button>Перейти</Button>
                                        </Link>
                                    )}
                                </Card.Body>

                                {/*for test блока*/}
                                <Card.Body style={{border: '1px solid #f5f5f5', margin: '3px', borderRadius: '7px'}}>
                                    <Card.Title>{course.quizTitle}</Card.Title>
                                    <Card.Text>{course.quizDescription}</Card.Text>
                                    {!isCompleted && (
                                        <Link to={`/lesson/quiz/0${index + 1}`}>
                                            <Button>Пройти</Button>
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