import React from "react";
import {Link} from "react-router-dom";

// внутренняя страница курсов, при нажатии в header на курсы вызывается этот компонент

const CourseCard = (props) => {
    const {id, imgUrl, title, lesson, students, rating} = props.item;
    return (
        <div class="container">
            <div className="single__course__item">
                <div className="course__img">
                    <img src={imgUrl} alt="" className="w-100"/>
                </div>

                <div className="course__details">
                    <div className="title_style">
                        <p style={{fontSize: '21px', fontWeight: 'bolder', color: 'black'}} className="course__title mb-4">{title}</p>
                    </div>
                    <div>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p style={{fontSize: '18px'}}  className="lesson d-flex align-items-center gap-1">
                                <i class="ri-book-open-line"></i> {lesson} Уроков
                            </p>

                            <p style={{fontSize: '18px'}} className="students d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i> {students}K
                                {/*<i class="ri-user-line"></i> {students}K*/}
                            </p>
                        </div>

                        <div className=" d-flex justify-content-between align-items-center">
                            <p style={{fontSize: '16px'}} className="rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill"></i> {rating}
                            </p>

                            <p  className="enroll d-flex align-items-center gap-1">
                                {/*<a href="#"> Зарегистрироваться сейчас</a>*/}
                                <Link style={{fontSize: '18px'}}f to={`/course/${id}`}> Пройти на курс</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
