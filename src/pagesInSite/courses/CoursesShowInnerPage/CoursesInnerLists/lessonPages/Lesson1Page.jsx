import React, {Fragment} from "react";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/Footer/Footer";
import Lesson1InnerPage from "../../course1/lesson1/Lesson1InnerPage";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Lesson1InnerPage />
            <Footer />
        </Fragment>
    );
};

export default Home;

