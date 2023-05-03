import React, { Fragment } from "react";
import Course1InnerLists from "./CoursesInnerLists/Course1InnerLists";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";



const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course1InnerLists />
            <Footer />
        </Fragment>
    );
};

export default Home;
