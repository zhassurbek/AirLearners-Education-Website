import React, {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TestsPage from "./TestsPage";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <TestsPage />
            <Footer />
        </Fragment>
    );
};

export default Home;
