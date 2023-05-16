import React, {useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import courseImg1 from "../../assests/images/samolyotcopy.jpeg";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import {Link} from "react-router-dom";

const coursesData = [
    {
        id: "01",
        title: "Electronic instrument system",
        lesson: 3,
        students: 3.2,
        rating: 4.9,
        imgUrl: courseImg1,
    },

    {
        id: "02",
        title: "Numbering system",
        lesson: 2,
        students: 2.1,
        rating: 4.8,
        imgUrl: courseImg2,
    },

    {
        id: "03",
        title: "Date conversion",
        lesson: 1,
        students: 1.7,
        rating: 4.95,
        imgUrl: courseImg3,
    },
];

const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка страницы вверх при загрузке страницы
    }, []);
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h1>Наши популярные курсы</h1>
                                <p style={{fontSize: "20px"}}>
                                    Курсы, представленные на нашей платформе,
                                    помогут вам расширить свои знания и навыки в области авиации.
                                </p>
                            </div>

                            <div className="w-50 text-end">
                                <Link to="/full-courses">
                                    {/*<button className="btn">Показать все</button>*/}
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {coursesData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Courses;
