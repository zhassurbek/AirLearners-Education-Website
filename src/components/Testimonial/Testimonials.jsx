import React from "react";
import "./testimonial.css";
import {Container, Row, Col} from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";
// import img from "../../assests/images/samolyot.jpeg"
const Testimonials = () => {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="10" md="12" className="m-auto">
                        <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
                            <div className="testimonial__img w-50">
                                <img style={{borderRadius: '20px',}} src={img} alt="" className="w-100"/>
                            </div>

                            <div className="testimonial__content w-50">
                                <h2 className="mb-4">Отзывы наших клиентов</h2>

                                <Slider {...settings}>
                                    <div>
                                        <div className="single__testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Отличный курс материалов
                                            </h6>
                                            <p>
                                                Мне больше всего понравилось как донесли информацию полноценно! И тесты
                                                есть и можно блоги написать!
                                            </p>

                                            <div className="student__info mt-4">
                                                <h6 className="fw-bold">Жанайдар Сагынтаев</h6>
                                                <p>Алматы, Казахстан</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single__testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Отличный курс материалов
                                            </h6>
                                            <p>
                                                Лучшие уроки за все время!
                                            </p>

                                            <div className="student__info mt-4">
                                                <h6 className="fw-bold">Артур Алиев</h6>
                                                <p>Алматы, Казахстан</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single__testimonial">
                                            <h6 className="mb-3 fw-bold">
                                                Отличный курс материалов
                                            </h6>
                                            <p>
                                                Очень очень понравилось, очень тщательно готовлены материалы
                                            </p>

                                            <div className="student__info mt-4">
                                                <h6 className="fw-bold">Тимур Касымов</h6>
                                                <p>Алматы, Казахстан</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
