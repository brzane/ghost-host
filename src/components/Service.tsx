import React from "react";
import { Col, Image } from "react-bootstrap";
interface ServiceProps {
  image: string;
  title: string;
  description: string;
}
const Service: React.FC<ServiceProps> = ({ image, title, description }) => {
  return (
    <Col md={3} sm={6}>
      <div className='service'>
        <div className='service_img'>
          <a href='#'>
            <img src={image} alt='' />
          </a>
        </div>
        <div className='service_details'>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;
