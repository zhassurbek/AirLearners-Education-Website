import React, {Fragment} from "react";
import Course2InnerLists from "./CoursesInnerLists/Course2InnerLists";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


const Home = () => {
    return (
        <Fragment>
            <Header />
            <Course2InnerLists />
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
