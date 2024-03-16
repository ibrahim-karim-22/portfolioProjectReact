import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer ">
            <Container>
                <Row>

                    <Col >
                        <div className='copyright' >&copy; Krispy </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;