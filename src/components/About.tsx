import React from "react";
import { Col, Row } from "react-bootstrap";
import Member1 from "../assets/images/member1.png";
import Member2 from "../assets/images/member2.png";
import Member3 from "../assets/images/member3.png";
import "./about.css";
import TeamMember from "./TeamMember";
const About = () => {
  return (
    <div className='abouts_area'>
      <Row>
        <Col md={5} sm={12}>
          <div className='single_about'>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat eget diam sit amet molestie.Curabitur. ut ipsum bibendum
              tortor lacinia fermentum nec joeıa.Mauris at augue libero. Fusce
              posuere, sapien nec poır.Uaee augsuada sed mauris in tincidunt...
            </p>
          </div>
        </Col>
        <Col md={7} sm={12}>
          <div className='single_about_right'>
            <Row>
              <TeamMember
                image={Member1}
                name='Brzane Barmaga'
                title='Web Dev'
              />
              <TeamMember
                image={Member2}
                name='Anas Bakkar'
                title='Flutter Dev'
              />
              <TeamMember image={Member3} name='Bilal Younes' title='Web Dev' />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
