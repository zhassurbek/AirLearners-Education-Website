import React, {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Quiz2Test from "../Quiz2Test";

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Quiz2Test />
        </div>
        <Footer/>
    </Fragment>);
};

export default Home;
