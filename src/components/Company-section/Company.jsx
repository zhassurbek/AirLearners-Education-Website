import React from "react";
import {Container, Row, Col} from "reactstrap";

// блок авиакомпании

const Company = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="2" md="3" sm="4" xs="6">

                        <p style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}}
                           className=" d-flex align-items-center gap-1">
                            <i className="jam ri-plane-line"></i>
                            Air <br/> Astana
                        </p>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <p  style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} className=" d-flex align-items-center gap-1">
                            <i className="jam ri-plane-line"></i>
                            Qatar Airways
                        </p>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <p  style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} className=" d-flex align-items-center gap-1">
                            <i class="jam jam-plane-f"></i> Singapore Airlines
                        </p>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <p  style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} className=" d-flex align-items-center gap-1">
                            <i class="jam ri-send-plane-2-fill"></i> Fly Emirates
                        </p>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <p  style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="ri-send-plane-2-line"></i> All Nippon Airways
                        </p>
                    </Col>

                    <Col lg="2" md="3" sm="4" xs="6">
                        <p  style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} className=" d-flex align-items-center gap-1">
                            {" "}
                            <i class="jam jam-plane"></i> Fly <br/>Arystan
                        </p>
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
