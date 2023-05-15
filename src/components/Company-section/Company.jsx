import React from "react";
import {Container, Row, Col} from "reactstrap";

const Company = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            <i className="jam ri-plane-line"></i>
                            Air <br/> Astana
                        </h4>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            <i className="jam ri-plane-line"></i>
                            Qatar Airways
                        </h4>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            <i class="jam jam-plane-f"></i> Singapore Airlines
                        </h4>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            <i class="jam ri-send-plane-2-fill"></i> Fly Emirates
                        </h4>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-send-plane-2-line"></i> All Nippon Airways
                        </h4>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <h4 className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="jam jam-plane"></i> Fly <br/>Arystan
                        </h4>
                    </Col>

                    {/*<Col lg="2" md="3" sm="4" xs="6">*/}
                    {/*    <h2 className=" d-flex align-items-center gap-1">*/}
                    {/*        {" "}*/}
                    {/*        <i class="jam ri-plane-fill"></i> Turkish Airlines*/}
                    {/*    </h2>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </section>
    );
};

export default Company;
