import React, {useState} from "react";
import {Container, Row, Col} from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section id="choose-us">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="choose__content">
                            <h2>Почему мы?</h2>
                            <p>
                                <ul>
                                    <li>Наша платформа предлагает качественное и доступное обучение в сфере авиации,
                                        основанное на опыте профессионалов и инновационных подходах.
                                    </li>
                                    <li>Мы обеспечиваем удобный формат обучения, гибкость расписания и возможность
                                        обучения в любом месте и в любое время, используя онлайн-технологии.
                                    </li>
                                    <li>Наша цель - помочь нашим студентам достичь высоких результатов в
                                        профессиональной деятельности и стать качественными кадрами в сфере авиации.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="choose__img">
                            {showVideo ? (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=p0ggtmXghPg"
                                    controls
                                    width="100%"
                                    height="350px"
                                />
                            ) : (
                                <img src={chooseImg} alt="" className="w-100"/>
                            )}

                            {!showVideo && (
                                <span className="play__icon">
                  <i
                      class="ri-play-circle-line"
                      onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChooseUs;
