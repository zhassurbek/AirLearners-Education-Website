import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Col} from "reactstrap";
import CourseCard from "../../coursesList/CourseCard";

const lessonsData = [
    {
        title: "Урок 1",
        description: "Описание курса 1",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
        // https://via.placeholder.com/150
    },
    {
        title: "Урок 2",
        description: "Описание курса 2",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
    {
        title: "Урок 3",
        description: "Описание курса 3",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
];

const Course1InnerInMainPage = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleOnClick = () => {
        setIsCompleted(true);
    };
    {lessonsData.map((itemLessonsData) => (
        <Col lg="4" md="6" sm="6">
            <CourseCard key={itemLessonsData.id} itemLessonsData={itemLessonsData}/>
        </Col>
    ))}

    return (
        <ListGroup>
            {lessonsData.map((course, index) => (
                <ListGroup.Item key={index}>
                    <Card>
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                            {!isCompleted && (
                                <Link to={`/course/01/lesson${index + 1}`}>
                                    <Button>Перейти</Button>
                                </Link>
                            )}
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            ))}
        </ListGroup>

    );
};

export default Course1InnerInMainPage;


// import React, {useState} from "react";
// import {Button, Card, ListGroup} from "react-bootstrap";
//
// const courses = [
//     {
//         title: "Урок 1",
//         description: "Описание курса 1",
//         image: "",
//         // https://via.placeholder.com/150
//     },
//     {
//         title: "Урок 2",
//         description: "Описание курса 2",
//         image: "",
//     },
//     {
//         title: "Урок 3",
//         description: "Описание курса 3",
//         image: "",
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
//     return (
//         <ListGroup>
//             {courses.map((course, index) => (
//                 <ListGroup.Item key={index}>
//                     <Card>
//                         <Card.Img variant="top" src={course.image} />
//                         <Card.Body>
//                             <Card.Title>{course.title}</Card.Title>
//                             <Card.Text>{course.description}</Card.Text>
//                             {!isCompleted && (
//                                 <Button onClick={handleOnClick}>Перейти</Button>
//                             )}
//                             {/*{isCompleted && (*/}
//                             {/*    <Link to="/lesson1">Перейти</Link>*/}
//                             {/*)}*/}
//                         </Card.Body>
//                     </Card>
//                 </ListGroup.Item>
//             ))}
//         </ListGroup>
//     );
// };
//
// export default Course1InnerInMainPage;
