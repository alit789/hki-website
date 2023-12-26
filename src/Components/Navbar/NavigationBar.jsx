//import react
import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

// import Bootstrap Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

export const NavigationBar = () => {
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? "solid-navbar" : "transparent-navbar";
  return (
    <Navbar
      style={{ height: "80px" }}
      className={navbarClass}
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span>WFLIX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="link-nav">
              <Nav.Link id={isHomePage ? "active" : "notActive"} href="/">
                Beranda
              </Nav.Link>
              <Nav.Link id={isSearchPage ? "active" : "notActive"} href="/search">Search Movies</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/ngakan-made-alit-wiradhanta-723604185/">About Me</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
