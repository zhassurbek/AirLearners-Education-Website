import React, {Fragment} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ChatbotApp from "./Chatbot";

const Home = () => {
    return (<Fragment>
        <Header/>

        <div >
            <ChatbotApp/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
