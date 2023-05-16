import React, {Fragment} from "react";
import Course3InnerLists from "./CoursesInnerLists/Course3InnerLists";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course3InnerLists />
            <Footer />
        </Fragment>
    );
};

export default Home;
