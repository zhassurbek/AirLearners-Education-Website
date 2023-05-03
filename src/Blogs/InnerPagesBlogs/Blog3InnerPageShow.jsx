import {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Blog1InnerPage from "./Blog1InnerPage";
import Blog3InnerPage from "./Blog3InnerPage";


const Blog1InnerPageShow = () => {
    return (
        <Fragment>
            <Header/>
            <Blog3InnerPage/>
            <Footer/>
        </Fragment>
    );
}
export default Blog1InnerPageShow;