import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row } from "react-bootstrap";
import "./testimonials.css";
const Tesimonials = () => {
  return (
    <section id='clients' className='testimonials'>
      <div className='overlay-fluid-block'>
        <Container>
          <Row>
            <OwlCarousel className='owl-theme' items={1} loop nav>
              <div className='testimonial text-center'>
                <p>
                  “Suspendisse tempor turpis odio, sit amet cursus leo consequat
                  non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar
                  vitae.”{" "}
                </p>
                <a href=''>John Doe</a>
              </div>
              <div className='testimonial text-center'>
                <p>
                  “Suspendisse tempor turpis odio, sit amet cursus leo consequat
                  non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar
                  vitae.”{" "}
                </p>
                <a href=''>John Doe</a>
              </div>
              <div className='testimonial text-center'>
                <p>
                  “Suspendisse tempor turpis odio, sit amet cursus leo consequat
                  non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar
                  vitae.”{" "}
                </p>
                <a href=''>John Doe</a>
              </div>
            </OwlCarousel>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Tesimonials;
