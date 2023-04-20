import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./BasicExample.css"
import {Col, Container, Row} from "reactstrap";

const navLinks = [
    {
        title: "Test1",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"
    },
    {
        title: "Test2",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"

    },

    {
        title: "Test3",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"
    },
    {
        title: "Test4",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"
    },
    {
        title: "Test5",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"
    },
    {
        title: "Test6",
        description: "/",
        image: "https://jusan.kz/file-server/filename?dir=loan/express&filename=bonuses-2.png"
    },
];


function BasicExample() {
    return (
        <section>
            <Container>
                <h2 style={{textAlign: "center"}}>Tests</h2>
                {/*<Row>*/}
                    {/*<Col lg="6" md="6">*/}
                        <div>
                            {navLinks.map((el) => (
                                <Card className="lists_basic">
                                    {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                            ))}
                        </div>
                    {/*</Col>*/}
                {/*</Row>*/}
            </Container>
        </section>
    );
}

export default BasicExample;