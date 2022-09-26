import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./register.css";
const Register = () => {
  return (
    <section id='register' className='register'>
      <Row className='text-center'>
        <Col sm={6} className=' no-padding'>
          <div className='login_btn single_login'>
            <a href=''>Login</a>
          </div>
        </Col>
        <Col sm={6} className=' no-padding'>
          <div className='register_btn'>
            <a href=''>Register</a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Register;
