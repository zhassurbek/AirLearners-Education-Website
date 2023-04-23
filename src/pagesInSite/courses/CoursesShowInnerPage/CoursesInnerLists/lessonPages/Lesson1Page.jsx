import React, { Fragment } from "react";

import LessonPageCard from "./LessonPageCard";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/Footer/Footer";
import Lesson1InnerPage from "./Lesson1InnerPage";



const Home = () => {
    return (
        <Fragment>
            <Header />
            <Lesson1InnerPage />
            {/*<HeroSection />*/}
            {/*<CompanySection />*/}
            {/*<AboutUs />*/}
            {/*<Courses />*/}
            {/*<ChooseUs />*/}
            {/*<Features />*/}
            {/*<FreeCourse />*/}
            {/*<Testimonials />*/}
            {/*<Newsletter />*/}
            <Footer />
        </Fragment>
    );
};

export default Home;



// // // LessonPage.js
// // import React from "react";
// // import { Col, Container, Row } from "react-bootstrap";
// //
// // const LessonPage = ({ match }) => {
// //     const { lessonNumber } = match.params;
// //     const course = courses[0]; // Здесь мы используем первый курс в массиве courses
// //
// //     return (
// //         <Container>
// //             <Row>
// //                 <Col>
// //                     <h1>{course.lessonTitle} {lessonNumber}</h1>
// //                 </Col>
// //             </Row>
// //             <Row>
// //                 <Col>
// //                     <iframe
// //                         width="560"
// //                         height="315"
// //                         src={`https://www.youtube.com/embed/${course.youtubeLink}`}
// //                         title="YouTube video player"
// //                         frameborder="0"
// //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                         allowfullscreen
// //                     ></iframe>
// //                 </Col>
// //             </Row>
// //             <Row>
// //                 <Col>
// //                     <p>{course.description}</p>
// //                 </Col>
// //             </Row>
// //         </Container>
// //     );
// // };
// //
// // export default LessonPage;
//
//
// import React from "react";
// import {Link} from "react-router-dom";
//
// const Lesson1Page = (props) => {
//     const {id, title, lessonTitle, youtubeLink, description, fullDescriptionText} = props.itemLessonsData;
//
//     return (
//         <div class="container">
//             <div className="single__course__item">
//                 <div className="course__img">
//                     <img src={imgUrl} alt="" className="w-100"/>
//                 </div>
//
//                 <div className="course__details">
//                     <div className="title_style">
//                         <h6 className="course__title mb-4">{title}</h6>
//                     </div>
//                     {/*<div>*/}
//                     {/*    <div className=" d-flex justify-content-between align-items-center">*/}
//                     {/*        <p className="lesson d-flex align-items-center gap-1">*/}
//                     {/*            <i class="ri-book-open-line"></i> {lesson} Уроков*/}
//                     {/*        </p>*/}
//
//                     {/*        <p className="students d-flex align-items-center gap-1">*/}
//                     {/*            <i class="ri-user-line"></i> {students}K*/}
//                     {/*        </p>*/}
//                     {/*    </div>*/}
//
//                     {/*    <div className=" d-flex justify-content-between align-items-center">*/}
//                     {/*        <p className="rating d-flex align-items-center gap-1">*/}
//                     {/*            <i class="ri-star-fill"></i> {rating}*/}
//                     {/*        </p>*/}
//
//                     {/*        <p className="enroll d-flex align-items-center gap-1">*/}
//                     {/*            /!*<a href="#"> Зарегистрироваться сейчас</a>*!/*/}
//                     {/*            <Link to={`/course/${id}`}> Зарегистрироваться сейчас</Link>*/}
//                     {/*        </p>*/}
//                     {/*    </div>*/}
//                     {/*</div>*/}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Lesson1Page;
