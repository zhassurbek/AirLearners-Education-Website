import React, { Fragment } from "react";

import Course1InnerInMainPage from "./Course1InnerInMainPage";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course1InnerInMainPage />
            {/*<HeroSection />*/}
            {/*<CompanySection />*/}
            {/*<AboutUs />*/}
            {/*<Courses />*/}
            {/*<ChooseUs />*/}
            {/*<Features />*/}
            {/*<FreeCourse />*/}
            {/*<Testimonials />*/}
            {/*<Newsletter />*/}
            <Footer />
        </Fragment>
    );
};

export default Home;
