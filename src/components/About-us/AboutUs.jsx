import React from "react";
import "./about.css";
import {Container, Row, Col} from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100"/>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="about__content">
                            <h2>Про нас</h2>
                            <p>
                                Наша платформа предоставляет обучение в сфере авиации высокого качества, которое
                                помогает студентам получить знания и навыки, необходимые для успешной карьеры в этой
                                индустрии. Мы предлагаем удобное расписание и персонализированный подход к каждому
                                студенту, чтобы помочь им достичь своих целей и максимизировать свой потенциал. Наша
                                команда профессионалов и экспертов в области авиации обеспечивает нашим студентам лучшее
                                обучение в отрасли авиации!
                            </p>

                            <div className="about__counter">
                                <div className=" d-flex gap-5 align-items-center">
                                    <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={11} duration={2} suffix="K"/>
                    </span>

                                        <p className="counter__title">Завершенные проекты</p>
                                    </div>

                                    <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={6} duration={2} suffix="K"/>
                    </span>

                                        <p className="counter__title">Ученики по всему миру</p>
                                    </div>
                                </div>

                                <div className=" d-flex gap-5 align-items-center">
                                    <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={50} duration={2} suffix="M"/>
                    </span>

                                        <p className="counter__title">Привлеченные средства</p>
                                    </div>

                                    <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={2} suffix="K"/>
                    </span>

                                        <p className="counter__title">Обслуживаемые категории</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;
