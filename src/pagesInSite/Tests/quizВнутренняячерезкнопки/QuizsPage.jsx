import React, { Fragment } from "react";
import QuizsListPage from "./QuizsListPage";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Quizs = () => {
    return (
        <Fragment>
            <Header />
            <QuizsListPage />
            <Footer />
        </Fragment>
    );
};

export default Quizs;
