import React from "react";
import {Link} from "react-router-dom";

const QuizCard = (props) => {
    const {id, title, lesson, students, rating} = props.item;

    return (
        <div class="container">
            <div className="single__quiz__item">
                {/*<div className="course__img">*/}
                {/*    <img src={imgUrl} alt="" className="w-100"/>*/}
                {/*</div>*/}

                <div className="course__details">
                    <div className="title_style">
                        <p style={{fontSize: '21px', fontWeight: 'bolder', color: 'black'}} className="course__title mb-4">{title}</p>
                    </div>
                    <div>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p style={{fontSize: '18px'}}  className="lesson d-flex align-items-center gap-1">
                                <i class="ri-book-open-line"></i> {lesson} Вопросов
                            </p>

                            <p style={{fontSize: '18px'}}  className="students d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i> {students}K
                            </p>
                        </div>

                        <div className=" d-flex justify-content-between align-items-center">
                            <p style={{fontSize: '16px'}}  className="rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill"></i> {rating}
                            </p>

                            <p className="enroll d-flex align-items-center gap-1">
                                <Link style={{fontSize: '18px'}}  to={`/quiz/${id}`}> Пройти сейчас</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default QuizCard;
