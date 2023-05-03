import {Fragment} from "react";
import Header from "../components/Header/Header";
import BlogList from "./BlogList";
import Footer from "../components/Footer/Footer";

const BlogListShow = () => {
    return (
        <Fragment>
            <Header />
            <BlogList />
            <Footer />
        </Fragment>
    );
}

export default BlogListShow;