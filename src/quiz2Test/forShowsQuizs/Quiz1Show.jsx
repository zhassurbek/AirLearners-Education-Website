import React, {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Quiz2Test from "../Quiz2Test";
import Quiz1Test from "../Quiz1Test";

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Quiz1Test />
        </div>
        {/*<HeroSection/>*/}
        {/*<CompanySection/>*/}
        {/*<div id="example">*/}
        {/*    <AboutUs/>*/}
        {/*</div>*/}
        {/*<div id="courses">*/}
        {/*    <Courses/>*/}
        {/*</div>*/}
        {/*<div id="quizs-List-Page">*/}
        {/*    <QuizsListPage/>*/}
        {/*</div>*/}
        {/*<ChooseUs/>*/}
        {/*<Features/>*/}
        {/*<FreeCourse/>*/}
        {/*<Testimonials/>*/}
        {/*<Newsletter/>*/}
        <Footer/>
    </Fragment>);
};

export default Home;
