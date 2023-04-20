import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BasicExample from "./TestsPage";
import HeroSection from "../../components/Hero-Section/HeroSection";
import TestsPage from "./TestsPage";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <TestsPage />
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
