import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Interview Question Service</Navbar.Brand>
      {/* <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
    </Container>
  </Navbar>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
