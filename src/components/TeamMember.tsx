import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ image, name, title }) => {
  return (
    <Col sm={4}>
      <div className='single_team text-center'>
        <div className='team_img'>
          <img src={image} alt='' />
        </div>
        <div className='team_deatels'>
          <h4>{name}</h4>
          <p>{title}</p>
          <div className='team_socail'>
            <a href=''>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TeamMember;
