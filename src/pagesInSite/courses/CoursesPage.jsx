import React, {Fragment} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Courses from "../../components/Courses-section/Courses";


const CoursesPage = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <Courses />
            </div>

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


export default CoursesPage;


// import Footer from "../../components/Footer/Footer";
//
// const courses = [
//     { title: "Course 1", description: "Description of course 1" },
//     { title: "Course 2", description: "Description of course 2" },
//     { title: "Course 3", description: "Description of course 3" },
//     { title: "Course 4", description: "Description of course 4" },
// ];
//
//
//
// const CoursesPage = () => {
//     return (
//         <Fragment>
//             <Header />
//             {/*<HeroSection />*/}
//             {/*<CompanySection />*/}
//             {/*<AboutUs />*/}
//             {/*<Courses />*/}
//             {/*<ChooseUs />*/}
//             {/*<Features />*/}
//             {/*<FreeCourse />*/}
//             {/*<Testimonials />*/}
//             {/*<Newsletter />*/}
//
//             <div>
//                 <h1>Courses</h1>
//                 <ul>
//                     {courses.map((course, index) => (
//                         <li key={index}>
//                             <h2>{course.title}</h2>
//                             <p>{course.description}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//
//
//             <Footer />
//         </Fragment>
//     );
// };
//
// export default CoursesPage;
