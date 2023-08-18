import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../utils/servicesCardData";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="ellipse"></div>
      <div className="services-heading">
        <div className="header-left">
          <header>What We Do</header>
          <p>"The greatest ideas are the simplest." - William Golding</p>
        </div>
        <div className="header-right">
          <p>
            We believe in Our team of experienced engineers and designers has a
            proven track record of delivering high-quality software on time and
            within budget.
          </p>
        </div>
      </div>
      <div className="services-list-container">
        {servicesData.map(({ title, imgSrc, description }, id) => (
          <ServiceCard
            key={id}
            title={title}
            imgSrc={imgSrc}
            description={description}
          />
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  overflow-x: hidden;
  z-index: 5;
  /* height: 100vh; */
  background: #010100;
  width: 100%;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  .ellipse {
    position: absolute;
    right: 0;
    top: -5rem;
    width: 50%;
    height: 50%;
    transform: rotate(-10.229deg);
    border-radius: 902.767px;
    background: linear-gradient(
      268deg,
      #3d95e7 0%,
      rgba(179, 89, 249, 0.55) 44.72%,
      rgba(127, 55, 245, 0) 100%
    );
    filter: blur(87.5px);
  }
  .services-heading {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .header-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35%;
      header {
        font-size: 85px;
        font-weight: 400;
      }
    }
    .header-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;
      p {
        font-size: medium;
        font-weight: 300;
        width: 90%;
      }
    }
  }
  .services-list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    place-items: center;
  }
`;
