import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About-us/AboutUs";
import Courses from "./pagesInSite/courses/CoursesPage";
import BasicExample from "./pagesInSite/Tests/TestsPage";
import Tests from "./pagesInSite/Tests/Tests";
import Quiz1 from "./pagesInSite/Tests/quiz/quiz1";
import CoursesList1 from "./pagesInSite/courses/coursesList/course1";

import Quizs from "./pagesInSite/Tests/quiz/QuizsPage";
import Quiz2Test from "./quiz2Test/Quiz2Test";


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
            </Switch>
        </Router>
    );
};

export default MainApp;
