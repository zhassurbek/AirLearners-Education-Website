import React, {useState} from 'react';
import YouTube from 'react-youtube';
import "./InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {brown} from "@mui/material/colors";

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('Урок 1. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПА- НЕЛЯХ УПРАВЛЕНИЯ');
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=YVKdnKH4_08');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h3>Приборные доски, пульты и панели управления</h3>\n' +
            '  <p>Приборные доски, пульты и панели управления являются важными элементами электронных систем и приборов. Они используются в широком спектре приложений, начиная от авиационных и автомобильных приборных панелей до промышленных систем управления и систем безопасности.</p>\n' +
            '  <p>Приборные доски представляют собой панели, на которых располагаются различные индикаторы, выключатели и рычаги для управления различными функциями системы. Они могут быть аналоговыми или цифровыми, в зависимости от типа приборов и системы, которой они служат. Обычно они используются в авиации, автомобильной промышленности и промышленной автоматизации.</p>\n' +
            '  <p>Пульты управления - это устройства, которые используются для удаленного управления различными системами и оборудованием. Они могут быть проводными или беспроводными и обычно содержат кнопки, рычаги и дисплеи для отображения информации. Они широко используются в промышленности, телевизионной и радиовещательной отраслях, а также в домашних системах управления.</p>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '  <img src="https://avatars.dzeninfra.ru/get-zen_doc/35845/pub_5c52ad6178e16700ac2b9c4d_5c52bd91b409f700ad08bbd1/scale_1200" alt="pult" />\n' +
            '</div>\n ' +
            '<br>  <p>Панели управления - это типично плоские панели, на которых располагаются кнопки, индикаторы, дисплеи и другие элементы управления, которые служат для контроля и управления определенными функциями системы. Они часто используются в промышленности и автоматизации, где они служат для управления множеством процессов и систем, таких как управление температурой, освещением, вентиляцией и т.д.</p>\n' +
            '  <p>В общем, приборные доски, пульты и панели управления - это важные элементы в электронных системах и приборах, которые используются в различных областях, где необходим контроль и управление различными функциями системы.</p>\n' +
            '</div>');

    return (<section>

        <div className="container">

            <div className="lesson__inner__title">
                <h2>{lessonName}</h2>
            </div>

            {/*<Col lg="9" md="50" style={{borderRadius: '20px'}}>*/}
            <Col lg="9" md="20">
                <div className="choose__img_lesson">
                    {showVideo ? (
                        <ReactPlayer style={{position: 'center', paddingLeft: '100px'}}
                                     url="https://www.youtube.com/watch?v=p0ggtmXghPg"
                                     controls
                                     width="100%"
                                     height="450px"
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

            <div className="container">
                <div className="lesson__inner__description"
                     dangerouslySetInnerHTML={{__html: lessonDescription}}>
                </div>
            </div>


            <div className="container">
                {lessonDescription2 &&
                    <div className="lesson__inner__description"
                         dangerouslySetInnerHTML={{__html: lessonDescription2}}>
                    </div>
                }
            </div>


            {/*<div className="container">*/}
            {/*    <div className="lesson__inner__description">*/}
            {/*        <p style={{fontSize: '20px'}}>{lessonDescription}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </section>);
};

export default LessonPage;


// import React, { useState } from "react";
// import { Button, Card, ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import {Col} from "reactstrap";
// import CourseCard from "../../../coursesList/CourseCard";
//
// const lessonsData = [
//     {
//         title: "Урок 1",
//         description: "Описание курса 1",
//         image: "",
//         lessonTitle: "",
//         youtubeLink: "",
//         fullDescriptionText: "",
//         // https://via.placeholder.com/150
//     },
//     {
//         title: "Урок 2",
//         description: "Описание курса 2",
//         image: "",
//         lessonTitle: "",
//         youtubeLink: "",
//         fullDescriptionText: "",
//     },
//     {
//         title: "Урок 3",
//         description: "Описание курса 3",
//         image: "",
//         lessonTitle: "",
//         youtubeLink: "",
//         fullDescriptionText: "",
//     },
// ];
//
// const Course1InnerInMainPage = () => {
//     const [isCompleted, setIsCompleted] = useState(false);
//
//     const handleOnClick = () => {
//         setIsCompleted(true);
//     };
//
//
//
//     return (
//         <div className="container">
//             {lessonsData.map((itemLessonsData) => (
//                 <Col lg="4" md="6" sm="6">
//                     <CourseCard key={itemLessonsData.id} itemLessonsData={itemLessonsData}/>
//                 </Col>
//             ))}
//         </div>
//
//         // <ListGroup>
//         //     {lessonsData.map((course, index) => (
//         //         <ListGroup.Item key={index}>
//         //             <Card>
//         //                 <Card.Img variant="top" src={course.image} />
//         //                 <Card.Body>
//         //                     <Card.Title>{course.title}</Card.Title>
//         //                     <Card.Text>{course.description}</Card.Text>
//         //                     {!isCompleted && (
//         //                         <Link to={`/course/01/lesson${index + 1}`}>
//         //                             <Button>Перейти</Button>
//         //                         </Link>
//         //                     )}
//         //                 </Card.Body>
//         //             </Card>
//         //         </ListGroup.Item>
//         //     ))}
//         // </ListGroup>
//
//     );
// };
//
// export default Course1InnerInMainPage;
//
//
// // import React, {useState} from "react";
// // import {Button, Card, ListGroup} from "react-bootstrap";
// //
// // const courses = [
// //     {
// //         title: "Урок 1",
// //         description: "Описание курса 1",
// //         image: "",
// //         // https://via.placeholder.com/150
// //     },
// //     {
// //         title: "Урок 2",
// //         description: "Описание курса 2",
// //         image: "",
// //     },
// //     {
// //         title: "Урок 3",
// //         description: "Описание курса 3",
// //         image: "",
// //     },
// // ];
// //
// // const Course1InnerInMainPage = () => {
// //     const [isCompleted, setIsCompleted] = useState(false);
// //
// //     const handleOnClick = () => {
// //         setIsCompleted(true);
// //     };
// //
// //     return (
// //         <ListGroup>
// //             {courses.map((course, index) => (
// //                 <ListGroup.Item key={index}>
// //                     <Card>
// //                         <Card.Img variant="top" src={course.image} />
// //                         <Card.Body>
// //                             <Card.Title>{course.title}</Card.Title>
// //                             <Card.Text>{course.description}</Card.Text>
// //                             {!isCompleted && (
// //                                 <Button onClick={handleOnClick}>Перейти</Button>
// //                             )}
// //                             {/*{isCompleted && (*/}
// //                             {/*    <Link to="/lesson1">Перейти</Link>*/}
// //                             {/*)}*/}
// //                         </Card.Body>
// //                     </Card>
// //                 </ListGroup.Item>
// //             ))}
// //         </ListGroup>
// //     );
// // };
// //
// // export default Course1InnerInMainPage;
