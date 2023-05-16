import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pagesInSite/courses/CoursesPage";
import Tests from "./pagesInSite/Tests/Tests";
import CoursesList1 from "./pagesInSite/courses/course1Show";

import Quizs from "./pagesInSite/Tests/./quizВнутренняячерезкнопки/QuizsPage";
import Quiz2Test from "./quiz2Test/Quiz2Test";
import Quiz2Show from "./quiz2Test/forShowsQuizs/Quiz2Show";
import Quiz1Show from "./quiz2Test/forShowsQuizs/Quiz1Show";
import Quiz3Show from "./quiz2Test/forShowsQuizs/Quiz3Show";
import Course1InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/course1/Course1InnerPageShow";
import Course3InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/Course3InnerPageShow";
import Course2InnerPageShow from "./pagesInSite/courses/CoursesShowInnerPage/Course2InnerPageShow";
import Lesson1Page from "./pagesInSite/courses/CoursesShowInnerPage/CoursesInnerLists/lessonPages/Lesson1Page";
import TextBooksShow from "./booksForDownload/TextBooksShow";
import AskMeShow from "./AskMe/AskMeShow";
import BlogListShow from "./Blogs/BlogListShow";
import Blog1InnerPageShow from "./Blogs/InnerPagesBlogs/Blog1InnerPageShow";
import Blog2InnerPageShow from "./Blogs/InnerPagesBlogs/Blog2InnerPageShow";
import Blog3InnerPageShow from "./Blogs/InnerPagesBlogs/Blog3InnerPageShow";
import Blog4InnerPageShow from "./Blogs/InnerPagesBlogs/Blog4InnerPageShow";
import Lesson1Quiz1Show
    from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson1/lesson1quiz/forShowsQuizs/Lesson1Quiz1Show";
import Lesson2Test from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson2/lesson2quiz/Lesson2Test";
import Lesson2Page from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson2/lessonPages/Lesson2Page";
import Lesson2Quiz2Show
    from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson2/lesson2quiz/forShowsQuizs/Lesson2Quiz2Show";
import Lesson3Quiz3Show
    from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson3/lesson2quiz/forShowsQuizs/Lesson3Quiz3Show";
import Lesson3Page from "./pagesInSite/courses/CoursesShowInnerPage/course1/lesson3/lessonPages/Lesson3Page";


const MainApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
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
                <Route exact path="/lesson/02" component={Lesson2Page} />
                <Route exact path="/lesson/03" component={Lesson3Page} />

                {/*page textBooks for download*/}
                <Route exact path="/textbooks" component={TextBooksShow} />



                {/* Inner Page Lessons from Courses */}
                <Route exact path="/course/01/lesson1" component={Quiz2Show} />

                {/*AskMe ChatBot*/}
                <Route exact path="/ask-me" component={AskMeShow} />

                {/*Blogs page*/}
                <Route exact path="/blogs" component={BlogListShow} />

                {/*inner page blogs*/}
                <Route exact path="/blog/1" component={Blog1InnerPageShow} />
                <Route exact path="/blog/2" component={Blog2InnerPageShow} />
                <Route exact path="/blog/3" component={Blog3InnerPageShow} />
                <Route exact path="/blog/4" component={Blog4InnerPageShow} />


                {/*для перехода на внутреннюю страницу по тестам уроков по нумерации*/}
                <Route path="/lesson/quiz/01" component={Lesson1Quiz1Show} />
                <Route path="/lesson/quiz/02" component={Lesson2Quiz2Show} />
                <Route path="/lesson/quiz/03" component={Lesson3Quiz3Show} />

                {/*для перехода на внутреннюю страницу по тестам уроков по нумерации
                    второй курс
                */}
                <Route path="/lesson/quiz/01" component={Lesson1Quiz1Show} />
                <Route path="/lesson/quiz/02" component={Lesson1Quiz1Show} />
                <Route path="/lesson/quiz/03" component={Lesson1Quiz1Show} />

                {/*для перехода на внутреннюю страницу по тестам уроков по нумерации
                    третий курс
                */}
                <Route path="/lesson/quiz/01" component={Lesson1Quiz1Show} />
                <Route path="/lesson/quiz/02" component={Lesson1Quiz1Show} />
                <Route path="/lesson/quiz/03" component={Lesson1Quiz1Show} />

            </Switch>
        </Router>
    );
};

export default MainApp;
