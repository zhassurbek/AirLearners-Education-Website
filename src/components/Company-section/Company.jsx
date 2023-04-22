import React from "react";
import {Container, Row, Col} from "reactstrap";

const Company = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="SiQatarairways"/>
                            Qatar Airways
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="ri-pinterest-line"></i> Singapore Airlines
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <i class="ri-dribbble-line"></i> Fly Emirates
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-apple-fill"></i> ANA All Nippon Airways
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-finder-fill"></i> Japan Airlines
                        </h3>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h2 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-google-fill"></i> Turkish Airlines
                        </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Company;
