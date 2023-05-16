import React, {Fragment} from "react";
import Header from "../../../../../../../components/Header/Header";
import Lesson1Test from "../Lesson1Test";
import Footer from "../../../../../../../components/Footer/Footer";


// компонент для показа тестов на внутренной странице первого тест
// внутренняя страница первого теста

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Lesson1Test/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
