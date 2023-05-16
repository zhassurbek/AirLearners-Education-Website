import React, {Fragment} from "react";
import Lesson2InnerPage from "../Lesson3InnerPage";
import Header from "../../../../../../components/Header/Header";
import Footer from "../../../../../../components/Footer/Footer";
import Lesson3InnerPage from "../Lesson3InnerPage";



const Home = () => {
    return (
        <Fragment>
            <Header />
            <Lesson3InnerPage />
            <Footer />
        </Fragment>
    );
};

export default Home;

