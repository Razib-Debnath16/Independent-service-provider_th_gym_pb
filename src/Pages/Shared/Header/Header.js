import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: 'white' }} href="home#services">Services</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ color: 'white' }} as={Link} to="/about">About Me</Nav.Link>
                        {/* {user ?
                            <Button onClick={logout} variant="primary">Log out</Button>
                            : */}
                        <Nav.Link style={{ color: 'white' }} as={Link} to="/Login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;