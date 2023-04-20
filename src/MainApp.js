import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About-us/AboutUs";
import Courses from "./pagesInSite/courses/CoursesPage";
import BasicExample from "./pagesInSite/Tests/BasicExample";
import Tests from "./pagesInSite/Tests/Tests";

const MainApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/tests" component={Tests} />
            </Switch>
        </Router>
    );
};

export default MainApp;
