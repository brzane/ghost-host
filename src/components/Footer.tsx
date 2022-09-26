import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <section id='footer' className='footer sections'>
      <Container>
        <Row>
          <div className='main_footer'>
            <Row>
              <Col sm={3} xs={12}>
                <div className='footer_logo'>
                  <a href=''>
                    <h3 className=''>Ghost Host</h3>
                  </a>
                </div>
              </Col>
              <Col sm={9} xs={12}>
                <div className='footer_menu'>
                  <ul className='list-inline'>
                    <li>
                      <a href=''>HOME</a>
                    </li>
                    <li>
                      <a href=''>ABOUT US</a>
                    </li>
                    <li>
                      <a href=''>BLOG</a>
                    </li>
                    <li>
                      <a href=''>POLICY</a>
                    </li>
                    <li>
                      <a href=''>CONTACT</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <Col sm={9}>
            <div className='footer_bottom_left'>
              <Row>
                <Col sm={6} xs={12}>
                  <div className='single_right_footer '>
                    <p>
                      Lorem ipsum dolor sit amet, consecteteeseurı adipiscing
                      elit. Donec mollis commodoeesene que, non commodo risus
                      volutpat vel.
                    </p>
                    <a href=''>
                      Developed by : <strong>Brzane Barmaga</strong>
                    </a>
                  </div>
                </Col>
                <Col sm={3} xs={6}>
                  <div className='single_right_footer'>
                    <ul>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Support
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Account
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Product
                          Catalog
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Shortcodes
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={3} xs={6}>
                  <div className='single_right_footer'>
                    <ul>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Support
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Account
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Product
                          Catalog
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FontAwesomeIcon icon={faChevronRight} /> Shortcodes
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={3} xs={12}>
            <div className='footer_bottom_right'>
              <a href='#'>
                <FontAwesomeIcon icon={faPhone} /> 0000-0000-0000
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faEnvelope} />
                {"  "}
                informationteam@ghosthost.com
              </a>
              <p>Lorem Ipsum Street, Lorem Avenue,Lorem Ipsum </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
