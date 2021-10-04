import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> Elearning Master <img height="50px" src={img} alt="logo"></img> </Navbar.Brand>
                <Nav className="navbar">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;