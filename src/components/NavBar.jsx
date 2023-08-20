import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/mainLogo.svg";
import "../styles/btnStyles.css";
import { CgMenu, CgClose } from "react-icons/cg";

const NavBar = () => {
  const [hamBurger, setHamBurger] = useState(false);

  return (
    <NavContainer>
      <div className="logo">
        <img src={logo} alt="Tekorse" />
      </div>
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="letsTalk">
        <a href="#contact">Let's Talk</a>
      </button>
      {hamBurger ? (
        <CgClose
          className="ham-burger"
          onClick={() => setHamBurger(!hamBurger)}
        />
      ) : (
        <CgMenu
          className="ham-burger"
          onClick={() => setHamBurger(!hamBurger)}
        />
      )}
      {hamBurger && (
        <ul className="mobile-nav">
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#services">Services</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setHamBurger(!hamBurger)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 105px;
  background-color: #010100;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
  .logo {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
  }
  .nav-items {
    display: flex;
    column-gap: 2rem;
    list-style: none;
    li {
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  button {
    background-color: #4353ff;
    color: #fff;
    width: 126px;
    height: 50px;
    flex-shrink: 0;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease-in-out;
    a {
      text-decoration: none;
      color: #fff;
    }

    cursor: pointer;
    &:hover {
      background-color: rgba(67, 83, 255, 0.9);
      color: #fff;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 0px 20px rgba(67, 83, 255, 0.5);
      z-index: 1;
    }
  }
  .ham-burger {
    display: none;
  }
  .mobile-nav {
    position: absolute;
    background-color: #010100;
    top: 105px;
    left: 0;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease-in-out;
    li {
      list-style: none;
      font-size: 20px;
      border-bottom: 1px solid #fff;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    .logo {
      font-size: 2rem;
    }
    .nav-items {
      display: none;
    }
    .ham-burger {
      display: block;
    }
    .glow-on-hover {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .logo {
      font-size: 1rem;
      img {
        width: 100px;
      }
    }
    .nav-items {
      display: none;
    }
    .ham-burger {
      display: block;
    }
    .letsTalk {
      display: none;
    }
  }
`;
