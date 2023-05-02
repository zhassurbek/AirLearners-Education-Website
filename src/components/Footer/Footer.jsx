import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";
import 'jam-icons/css/jam.min.css';


const footerQuickLinks = [
  {
    display: "Главная",
    url: "#",
  },
  {
    display: "Про нас",
    url: "#",
  },

  {
    display: "Курсы",
    url: "#",
  },

  {
    display: "Блоги",
    url: "tests-typescript",
  },
];

const footerInfoLinks = [
  {
    display: "Политика конфиденциальности",
    url: "#",
  },
  // {
  //   display: "Membership",
  //   url: "#",
  // },

  {
    display: "Руководство по покупкам",
    url: "#",
  },

  {
    display: "Условия использования",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            {/*<h2 className=" d-flex align-items-center gap-1">*/}
            {/*  <i class="ri-pantone-line"></i> Air Learners.*/}
            {/*</h2>*/}
            <h2 className=" d-flex align-items-center gap-1">
              <i className="jam jam-plane"></i> Air Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Следите за нами в социальных сетях</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Главная</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Информация</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Связаться с нами</h6>

            <p>Адрес: Алматы</p>
            <p> Телефон: +7 777 777 77 77 </p>
            <p>Почта: airlearners@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
