import React, {Fragment} from "react";
import Course2InnerLists from "./CoursesInnerLists/Course2InnerLists";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course2InnerLists />
            <Footer />
        </Fragment>
    );
};

export default Home;
