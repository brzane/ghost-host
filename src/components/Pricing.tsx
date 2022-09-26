import React from "react";
import { Row, Container } from "react-bootstrap";
import About from "./About";
import PricingCard from "./PricingCard";
import "./pricing.css";
const Pricing = () => {
  return (
    <>
      <section id='pricingtop' className='pricingtop'>
        <div className='overlay'></div>
      </section>

      <section id='pricing' className='pricing'>
        <Container>
          <Row>
            <PricingCard
              title='BASIC PACKAGE'
              color='yellow'
              seperator='separetor_one'
              border='pricing_color_one'
              icon='p_icon_one'
            />
            <PricingCard
              title='NORMAL PACKAGE'
              color='grey'
              seperator='separetor_two'
              border='pricing_color_two'
              icon='p_icon_two'
            />
            <PricingCard
              title='BIG PACKAGE PACKAGE'
              color='red'
              seperator='separetor_three'
              border='pricing_color_three'
              icon='p_icon_three'
            />
            <PricingCard
              title='BIGGEST PACKAGE'
              color='green'
              seperator='separetor_four'
              border='pricing_color_four'
              icon='p_icon_four'
            />
          </Row>

          <About />
        </Container>
      </section>
    </>
  );
};

export default Pricing;
