import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Server from "../assets/images/server.png";
import Skype from "../assets/images/skype.png";
import Support from "../assets/images/support.png";
import Domain from "../assets/images/domain.png";
import Service from "./Service";
import "./services.css";
const Services = () => {
  return (
    <section id='service' className='services'>
      <Container>
        <Row className='text-center'>
          <Service
            image={Server}
            title='Fast Servers'
            description=' Nulla dapibus neque augue, quis tincidunt tortor aliquam
                  vitae.'
          />
          <Service
            image={Skype}
            title='Cloud Servers'
            description=' Nulla dapibus neque augue, quis tincidunt tortor aliquam
                  vitae.'
          />
          <Service
            image={Domain}
            title='Domain Transfer'
            description=' Nulla dapibus neque augue, quis tincidunt tortor aliquam
                  vitae.'
          />
          <Service
            image={Support}
            title='Live Support'
            description=' Nulla dapibus neque augue, quis tincidunt tortor aliquam
                  vitae.'
          />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
