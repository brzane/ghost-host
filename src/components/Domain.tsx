import React from "react";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import "./domain.css";

const Domain = () => {
  return (
    <section id='domain' className='domain'>
      <Container>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <div className='head_title text-center '>
              <h2>Would you like to buy a new domain ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nobis
                obcaecati quibusdam numquam hic rerum minus placeat!.
              </p>
            </div>

            <InputGroup size='lg'>
              <InputGroup.Text>www.</InputGroup.Text>
              <FormControl type='text' />
              <InputGroup.Text>
                .com
                <span className='caret'></span>
              </InputGroup.Text>
            </InputGroup>

            <div className='searchlist'>
              <div className=' text-center'>
                <ul className='offer-list'>
                  <li>
                    <p>.com</p>
                  </li>
                  <li>
                    <p>1 yer</p>
                  </li>
                  <li>
                    <p>$9.00 USD</p>
                  </li>
                  <li>
                    <p>Transfer Price</p>
                  </li>
                </ul>

                <ul className='offer-list no-border'>
                  <li>
                    <p>.net</p>
                  </li>
                  <li>
                    <p>1 yer</p>
                  </li>
                  <li>
                    <p>$9.00 USD</p>
                  </li>
                  <li>
                    <p>Transfer Price</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Domain;
