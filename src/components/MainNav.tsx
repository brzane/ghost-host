import React from "react";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./mainnav.css";
const MainNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  return (
    <header className='main_menu'>
      <Navbar expand='md' className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href='/'>
            <h3 className='logo'>Ghost Host</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}>
                HOME
              </Nav.Link>

              <Nav.Link
                href='#domain'
                className={
                  activeLink === "domain" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("domain")}>
                DOMAIN
              </Nav.Link>
              <Nav.Link
                href='#hosting'
                className={
                  activeLink === "hosting"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("hosting")}>
                HOSTING
              </Nav.Link>
              <Nav.Link
                href='#clients'
                className={
                  activeLink === "clients"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("clients")}>
                CLIENTS
              </Nav.Link>
              <Nav.Link
                href='#blog'
                className={
                  activeLink === "blog" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blog")}>
                BLOG
              </Nav.Link>
              <Nav.Link
                href='#support'
                className={
                  activeLink === "support"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("support")}>
                SUPPORT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNav;
