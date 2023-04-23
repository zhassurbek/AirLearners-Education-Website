// // CoursePage.jsx
// import React from "react";
// import CourseHeader from "./CourseHeader";
// import LessonList from "./LessonList";
// import LessonCard from "./LessonCard";
//
// const lessons = [
//     {
//         title: "Урок 1",
//         description: "Описание урока 1",
//     },
//     {
//         title: "Урок 2",
//         description: "Описание урока 2",
//     },
//     {
//         title: "Урок 3",
//         description: "Описание урока 3",
//     },
// ];
//
// const CoursePage = ({ title, description, imgUrl }) => {
//     return (
//         <div>
//             <CourseHeader title={title} description={description} />
//             <img src={imgUrl} alt="" />
//             <LessonList lessons={lessons} />
//             {lessons.map((lesson, index) => (
//                 <LessonCard
//                     key={index}
//                     title={lesson.title}
//                     number={index + 1}
//                     videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                     description={lesson.description}
//                 />
//             ))}
//         </div>
//     );
// };
//
// export default CoursePage;
