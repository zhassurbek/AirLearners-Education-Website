import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BasicExample from "./BasicExample";
import HeroSection from "../../components/Hero-Section/HeroSection";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <BasicExample />
            <HeroSection />
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
