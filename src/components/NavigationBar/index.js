import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background: #2e4057;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #ffffff !important;
    &:hover {
      color: #f18f01 !important;
    }
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,193,7, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  .navbar-light,
  .navbar-toggler {
    border: 1px solid rgba(255, 193, 7, 1);
  }
`;

const NavigationBar = (props) => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/content">Content</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
