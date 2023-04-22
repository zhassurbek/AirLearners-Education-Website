
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import QuizCard from "./QuizCard";

const quizsList = [
    {
        id: "01",
        title: "Электронные приборные системы",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        // imgUrl: courseImg1,
    },

    {
        id: "02",
        title: "Quiz 2",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        // imgUrl: courseImg2,
    },

    {
        id: "03",
        title: "Quiz 3",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        // imgUrl: courseImg3,
    },
];

const QuizsList = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h1>Наши популярные Quiz</h1>
                                <p style={{fontSize: "20px"}}>
                                    Тесты, представленные на нашей платформе,
                                    помогут вам расширить свои знания и навыки в области авиации.
                                </p>
                            </div>

                            <div className="w-50 text-end">
                                <Link to="/full-quizs">
                                    <button className="btn">Показать все quiz</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {quizsList.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <QuizCard key={item.id} item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default QuizsList;
