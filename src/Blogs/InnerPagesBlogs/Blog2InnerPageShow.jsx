import {Fragment} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Blog1InnerPage from "./Blog1InnerPage";
import Blog2InnerPage from "./Blog2InnerPage";


const Blog1InnerPageShow = () => {
    return (
        <Fragment>
            <Header/>
            <Blog2InnerPage/>
            <Footer/>
        </Fragment>
    );
}
export default Blog1InnerPageShow;