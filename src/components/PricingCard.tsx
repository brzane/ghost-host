import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import "./pricingcard.css";

interface PricingCardProps {
  title: string;
  color: string;
  seperator: string;
  border: string;
  icon: string;
}
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  color,
  seperator,
  border,
  icon,
}) => {
  return (
    <Col md={3} sm={6}>
      <div className={`single_pricing ${border}`}>
        <div className='pricing_head text-center'>
          <div className={`icon_area ${icon}`}>
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
          </div>
          <h3>{title}</h3>
          <div className='separator'></div>
        </div>
        <figure className='single_pricing_figure'>
          <ul>
            <li>
              <span className='princing_name'>Disk Space (GB)</span>{" "}
              <span className={`princing_price ${color}`}>50</span>
            </li>
            <li>
              <span className='princing_name'>Subdomains</span>{" "}
              <span className={`princing_price ${color}`}>50</span>
            </li>
            <li>
              <span className='princing_name'>Transfer (GB)</span>{" "}
              <span className={`princing_price ${color}`}>50</span>
            </li>
            <li>
              <span className='princing_name'>Data bases</span>{" "}
              <span className={`princing_price ${color}`}>1</span>
            </li>
            <li>
              <span className='princing_name'>Dashboards</span>{" "}
            </li>
            <li>
              <span className='princing_name'>Control Panel & FTP</span>{" "}
            </li>
            <li>
              <span className='princing_name'>Free Support</span>{" "}
            </li>
          </ul>
          <div className='separator'></div>
        </figure>

        <footer className='pricing_footer text-center'>
          <h3>
            <span className='dolor'>$</span> 20{" "}
            <span className='month'>/Mo </span>
          </h3>
          <div className={`smallseparator ${seperator}`}></div>
          <a href='#'>SELECT PLAN</a>
        </footer>
      </div>
    </Col>
  );
};

export default PricingCard;
