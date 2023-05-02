import React, {Fragment} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DocumentsList from "./textbooks";

const Home = () => {
    return (<Fragment>
        <Header/>

        <div className="container">
            <DocumentsList/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
