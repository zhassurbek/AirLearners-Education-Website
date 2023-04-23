import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pagesInSite/courses/CoursesPage";
import Tests from "./pagesInSite/Tests/Tests";
import CoursesList1 from "./pagesInSite/courses/course1Show";

import Quizs from "./pagesInSite/Tests/quiz/QuizsPage";
import Quiz2Test from "./quiz2Test/Quiz2Test";
import Quiz2Show from "./quiz2Test/forShowsQuizs/Quiz2Show";
import Quiz1Show from "./quiz2Test/forShowsQuizs/Quiz1Show";
import Quiz3Show from "./quiz2Test/forShowsQuizs/Quiz3Show";
import Course1InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/Course1InnerPageShow";
import Course3InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/Course3InnerPageShow";
import Course2InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/Course2InnerPageShow";
import Lesson1Page from "./pagesInSite/courses/CoursesShowInnerPage/CoursesInnerLists/lessonPages/Lesson1Page";


const MainApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/*<Route exact path="/about" component={About} />*/}
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/tests" component={Tests} />
                {/*<Route exact path="/quizsListPage" component={QuizsListPage} />*/}
                <Route exact path="/course1" component={CoursesList1} />
                <Route exact path="/full-courses" component={Courses} />
                <Route exact path="/full-quizs" component={Quizs} />
                <Route exact path="/quiz2Test" component={Quiz2Test} />
                <Route path="/quiz/01" component={Quiz1Show} />
                <Route path="/quiz/02" component={Quiz2Show} />
                <Route path="/quiz/03" component={Quiz3Show} />

                {/* Route when click on Courses for courses*/}
                <Route path="/course/01" component={Course1InnerPageShow} />
                <Route path="/course/02" component={Course2InnerPageShow} />
                <Route path="/course/03" component={Course3InnerPageShow} />



                <Route exact path="/lesson/01" component={Lesson1Page} />



                {/* For full-courses page rendering for courses */}
                {/*<Route path="/course/01" component={Cour}*/}



                {/* Inner Page Lessons from Courses */}
                <Route exact path="/course/01/lesson1" component={Quiz2Show} />
            </Switch>
        </Router>
    );
};

export default MainApp;
