import React, {Fragment} from "react";
import Header from "../../../../../../../components/Header/Header";
import Course3Lesson1Test from "../Course3Lesson1Test";
import Footer from "../../../../../../../components/Footer/Footer";


// компонент для показа тестов на внутренной странице первого тест
// внутренняя страница первого теста

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Course3Lesson1Test/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
