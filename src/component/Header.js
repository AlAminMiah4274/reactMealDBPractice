import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="primary-subtle" expand="lg">
            <Container>
                <Navbar.Brand className='fs-2 fw-semibold'>The React MealDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 fw-semibold anchor"
                        style={{ maxHeight: '140px' }}>
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                        <NavLink to="/restaurent">Restaurent</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;