import React, { Fragment } from "react";

import Course1InnerInMainPage from "./coursesList/Course1InnerInMainPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course1InnerInMainPage />
            <Footer />
        </Fragment>
    );
};

export default Home;
