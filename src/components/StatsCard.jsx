import React from "react";
import styled from "styled-components";

const StatsCard = ({ imgSrc, title }) => {
  return (
    <StatsCardContainer>
      <img src={imgSrc} alt="" />
      <header>{title}</header>
    </StatsCardContainer>
  );
};

export default StatsCard;

const StatsCardContainer = styled.div`
  width: 300px !important;
  height: 300px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
  img {
    width: 200px;
    height: 200px;
  }
  header {
    font-size: larger;
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 280px;
    img {
      height: 180px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 590px) {
    img {
      width: 250px;
    }
    header {
      font-size: 20px;
    }
  }
`;
