import React from "react";
import { Container, Row } from "react-bootstrap";
import "./hero.css";
const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className='hero-overlay-fluid'>
        <Container>
          <Row>
            <h2>HELLO!</h2>
            <p>We love our work...</p>
            <p>And We're taking it seriously...</p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
