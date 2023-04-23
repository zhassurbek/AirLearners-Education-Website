import React, {Fragment} from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../pagesInSite/courses/coursesList/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import QuizsListPage from "../pagesInSite/Tests/quiz/QuizsListPage";

const Home = () => {
    return (<Fragment>
        <Header/>
        <HeroSection/>
        <CompanySection/>
        <div id="example">
            <AboutUs/>
        </div>
        <div id="courses">
            <Courses/>
        </div>
        <div id="quizs-List-Page">
            <QuizsListPage/>
        </div>
        <ChooseUs/>
        <Features/>
        <FreeCourse/>
        <Testimonials/>
        <Newsletter/>
        <Footer/>
    </Fragment>);
};

export default Home;
