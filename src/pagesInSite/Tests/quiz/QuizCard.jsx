import React from "react";

const QuizCard = (props) => {
    const {imgUrl, title, lesson, students, rating} = props.item;

    return (
        <div class="container">
            <div className="single__quiz__item">
                <div className="course__img">
                    <img src={imgUrl} alt="" className="w-100"/>
                </div>

                <div className="course__details">
                    <div className="title_style">
                        <h6 className="course__title mb-4">{title}</h6>
                    </div>
                    <div>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p className="lesson d-flex align-items-center gap-1">
                                <i class="ri-book-open-line"></i> {lesson} Вопросов
                            </p>

                            <p className="students d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i> {students}K
                            </p>
                        </div>

                        <div className=" d-flex justify-content-between align-items-center">
                            <p className="rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill"></i> {rating}K
                            </p>

                            <p className="enroll d-flex align-items-center gap-1">
                                <a href="#"> Пройти сейчас</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
