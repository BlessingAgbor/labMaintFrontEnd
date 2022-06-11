import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
const Header = () => {
  return (
    <Container>
      <Wrap>
        <Logo>Lab-Maint</Logo>
        <Navigators>
          <Nav to="/">Home</Nav>
          <Nav to="about">About</Nav>
          <Nav to="why">Services</Nav>
          <Nav to="pricing">Pricing</Nav>
          <Nav to="userboard">Contact</Nav>
          <Button to="/signup">Get Started</Button>
        </Navigators>
      </Wrap>
    </Container>
  );
}

export default Header
const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content:space-between;
/* background: pink; */
height: 100%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: poppins;
  height: 70px;
  align-items: center;
  justify-content: center;
  /* padding: 0 20px; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(71, 42, 203, 1) 77%,
    rgba(134, 119, 218, 1) 203%,
    rgba(217, 217, 217, 1) 217%
  );
`;
const Button = styled(Link)`
  padding: 10px 15px;
  background: #fff;
  transition: all 350ms;
    text-decoration: none;
  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1.1);
  }
  border-radius: 4px;
  @media (max-width: 800px) {
    background: transparent;
    border: 1px solid #fff;
    padding: 5px 10px;
    font-size: 13px;
    color: #fff;
  }
`;
const Logo = styled.div`
color:#fff;

`;
const Navigators = styled.div`
  /* color: #fff; */
  width: 600px;
  display: flex;
  /* background: blue; */
  justify-content:space-around;
  align-items:center;
  @media (max-width:800px){
    display: none;
  }
`;

const Nav = styled(Link)`
text-decoration: none;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1.2);
  }
  color: #fff;
`;