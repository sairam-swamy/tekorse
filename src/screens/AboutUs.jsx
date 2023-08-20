import React from "react";
import styled from "styled-components";
import illusSvg from "../assets/illus.svg";
import aboutUs from "../assets/about_us.png";

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <div className="main">
        <header>
          Who We Are <img src={illusSvg} alt="" />
        </header>
        <div className="text-container">
          <p>
            Tekorse Technologies is a leading provider of custom software
            development services.We help businesses of all sizes solve their
            most challenging problems with innovative software solutions.{" "}
          </p>
          <p>
            Our Company specialized in human - centric digital experiences and
            improve the products every single day. Together with a team of
            professionals we come up with cool and important concepts , we will
            help your business reach a new level.
          </p>
          <div className="img-container">
            <img src={aboutUs} alt="" />
          </div>
        </div>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  overflow-x: hidden;
  z-index: 10;
  height: 100vh;
  background: #010100;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 5rem;
  header {
    margin-top: 5rem;
    margin-left: 10rem;
    position: relative;
    color: #fff;
    font-size: 60px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.85px;
    img {
      position: absolute;
      left: 15%;
    }
  }
  .text-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 7rem;
    p {
      width: 15%;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    .img-container {
      width: 30%;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    header {
      margin-left: 5rem;
      font-size: 50px;
      img {
        display: none;
      }
    }
    .text-container {
      flex-direction: row;
      p {
        width: 15%;
        font-size: 14px;
      }
      .img-container {
        width: 30%;
        img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* height: ; */
      header {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    .text-container {
      align-items: center;
      flex-direction: column;
      row-gap: 2rem;
      margin-top: 2rem;
      p {
        width: 60%;
        font-size: 14px;
        text-align: center;
      }
      .img-container {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 500px) {
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 3rem;
        header {
          text-align: center;
        }
        .text-container {
          p {
            width: 80%;
          }
        }
      }
    }
  }
`;
