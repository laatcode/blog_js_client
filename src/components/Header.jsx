import { Link } from "react-router-dom"
import LinkContainer from "react-router-bootstrap/LinkContainer"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"

import './styles/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col className="left">
                        <Link to="/">
                            <h1>Blog JS</h1>
                        </Link>
                    </Col>
                    <Col className="center" xs={6}>
                        <Form>
                            <Form.Control type="search" />
                        </Form>
                    </Col>
                    <Col className="right">
                        <Nav>
                            <Nav.Item>
                                <LinkContainer to="/login">
                                    <Nav.Link>Iniciar sesión</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            <Nav.Item>
                                <LinkContainer to="/register">
                                    <Nav.Link>Registrarse</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>    
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header