import React from "react";
import styled from "styled-components";
const ServiceCard = ({ imgSrc, description, title }) => {
  return (
    <ServiceCardContainer>
      <img src={imgSrc} alt="" />
      <div className="title">{title}</div>
      <p>{description}</p>
    </ServiceCardContainer>
  );
};

export default ServiceCard;

const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 2px solid white;
  img {
    height: 100px;
  }
  .title {
    font-size: 28px;
    font-weight: 500;
  }
  p {
    width: 70%;
    font-size: small;
    text-align: center;
  }
`;
