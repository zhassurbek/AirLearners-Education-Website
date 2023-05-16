import React, {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Quiz1Test from "../Quiz1Test";

// компонент для показа тестов на внутренной странице первого тест
// внутренняя страница первого теста

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Quiz1Test/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
