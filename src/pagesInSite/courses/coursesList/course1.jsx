import React, { Fragment } from "react";

import Course1List from "./Course1List";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course1List />
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
