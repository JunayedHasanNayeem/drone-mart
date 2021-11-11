import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Images/logo.png'
import './Header.css'

/* {
    user.email ?
        <Box>
            <Button onClick={logOut} sx={{ mr: 2 }}>Sign Out</Button>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button variant="contained">Dashboard</Button></Link>
        </Box> :

        <Box>
            <Link to="sign-up" style={{ textDecoration: 'none' }}><Button sx={{ mr: 2 }}>Sign Up</Button></Link>
            <Link to="sign-in" style={{ textDecoration: 'none' }}><Button variant="contained">Sign In</Button></Link>
        </Box>
} */

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <header >
            <Navbar collapseOnSelect expand="lg" bg="light" className="med-header" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/"><Image className="med-logo" src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/all-products">All Products</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                    <div className="d-flex align-items-center">
                                        <Nav.Link onClick={logOut}>Sign Out</Nav.Link>
                                        <Nav.Link as={Link} to="/dashboard/my-orders" ><Button variant="dark" className="px-3 ms-2">Dashboard</Button></Nav.Link>
                                    </div>
                                    :
                                    <div className="d-flex align-items-center">
                                        <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to="/sign-in"><Button variant="dark" className="px-3 ms-2">Sign In</Button></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};

export default Header;