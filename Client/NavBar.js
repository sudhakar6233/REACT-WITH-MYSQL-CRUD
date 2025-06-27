import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3 mt-2 shadow">
            <Navbar.Brand href="/" className="fw-bold fs-4 text-warning">
                CRUD App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="nav-link-custom">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link className="nav-link-custom">Create Post</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
