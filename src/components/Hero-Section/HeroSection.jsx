import React from "react";
import {Container, Row, Col} from "reactstrap";
import heroImg from "../../assests/images/air2.jpeg";
import "./hero-section.css";

const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <h2 className="mb-4 hero__title">
                                Вы можете учиться в любое время
                                <br/>
                                и в любом месте
                                <br/>
                                подбирая подходящее расписание
                                <br/>
                                для себя.
                            </h2>
                            <p className="mb-5" style={{fontSize: '20px'}}>
                               Учитесь на нашей платформе и станьте <br/> одним из качественных кадров в сфере авиации.
                                <br/>
                                У вас будет доступ к: курсам, тестам-викторинам!
                            </p>
                        </div>
                        {/*<div className="search">*/}
                        {/*  <input type="text" placeholder="Search" />*/}
                        {/*  <button className="btn">Search</button>*/}
                        {/*</div>*/}
                    </Col>

                    <Col lg="6" md="6">
                        <img src={heroImg} alt="" style={{borderRadius: "50px"}} className="w-100 hero__img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
