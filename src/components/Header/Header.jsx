import React, {useRef} from "react";
import {Container} from "reactstrap";
import "./header.css";
import {Link} from "react-router-dom";


const navLinks = [
    {
        display: "Главная",
        url: "/",
        scrollId: ""
    },
    {
        display: "Про нас",
        url: "#example",
        scrollId: "about-us-scroll"
    },

    {
        display: "Курсы",
        url: "/full-courses",
        scrollId: ""
    },
    {
        display: "Тесты",
        url: "/full-quizs",
        // url: "#quizs-List-Page",
        scrollId: ""
    },
    {
        display: "Учебники",
        url: "/textbooks",
        to: "choose-us",
        scrollId: ""
    },
    {
        display: "Блог",
        url: "/blogs",
        scrollId: ""
    },
    {
        display: "AskMe",
        url: "/ask-me",
        scrollId: ""
    },
];

const Header = () => {
    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i class="jam jam-plane"></i><Link to="/" className="link-main">
                            Air Learners
                        </Link>
                        </h2>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav__item">
                                        <a href={item.url}>{item.display}</a>
                                        {/*<Link url={item.url} to="" spy={true} smooth={true}>{item.display}</Link>*/}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/*<div className="nav__right">*/}
                        {/*    <p className="mb-0 d-flex align-items-center gap-2">*/}
                        {/*        <i class="ri-phone-line"></i> Связаться с нами*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="nav__right">
                            <p class="ri-phone-line"  className="mb-0 d-flex align-items-center justify-content-center gap-2">
                                <a style={{display: 'flex', textDecoration: 'none' }} href="https://t.me/+LI_41bZKWX5kY2Iy" target="_blank" rel="noopener noreferrer">
                                    <i class="ri-phone-line"></i> <span  style={{ fontSize: '20px', color: '#17bf9e', fontWeight: 'bolder'}}>Связаться с нами</span>
                                    {/*<i ></i> <span  style={{fontSize: '20px', color: 'rgba(0,0,0,0.96)', fontWeight: 'bolder'}}>Связаться с нами</span>*/}
                                </a>
                            </p>
                        </div>


                    </div>

                    <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
