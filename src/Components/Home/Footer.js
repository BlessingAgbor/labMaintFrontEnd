import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <Container>
      <Div>
        <Card>
          <Up>Lab Maint</Up>
          <Nav>Lab Maint is here to</Nav>
          <Nav>give companies the best</Nav>
          <Nav>Lab facility maintenance</Nav>
          <Nav>experience</Nav>
        </Card>

        <Card>
          <Up>About</Up>
          <Nav>About Us</Nav>
          <Nav>Features</Nav>
          <Nav>News & Blog</Nav>
        </Card>

        <Card>
          <Up>Company</Up>
          <Nav>Team</Nav>
          <Nav>Plan & Pricing</Nav>
          <Nav>Become a Member</Nav>
        </Card>

        <Card>
          <Up>Support</Up>
          <Link to="FAQ" style={{
            textDecoration:"none",
            color: "#fff"
          }}>
            <Nav>FAQs</Nav>
          </Link>
          <Nav>Support Us</Nav>
          <Nav>Contact Us</Nav>
        </Card>
      </Div>
      <Div2>
        <Policy>
          <Hold1>
            <Span>copyright 2022 Lab Maint. All rights reserved</Span>
          </Hold1>
          <Hold>
            <Span>Cookie Policy</Span>
            <Span>Privacy Policy</Span>
            <Span>Term of use</Span>
          </Hold>
        </Policy>
      </Div2>
    </Container>
  );
}

export default Footer


const Hold = styled.div`
  display: flex;
  @media (max-width: 800px) {
    /* flex: 1; */
    width: 100%;
    justify-content: space-around;
  }
  flex: 0.4;
  justify-content: space-between;
`;
const Hold1 = styled.div`
  display: flex;
  flex: 0.4;
`;
const Div = styled.div`
  display: flex;

  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: space-around;
`;
const Div2 = styled.div`
  display: flex;
  margin-top: 60px;

  border-top: 1px solid #fff;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Span = styled.div``;

const Policy = styled.div`
  width: 94%;

  display: flex;
  height: 40px;
  /* background: red; */
  align-items: center;
  justify-content: space-between;
  color: #fff;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Nav = styled.div`
  margin-bottom: 6px;
  text-decoration: none;
`;
const Up = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
`;

const Card = styled.div`
  width: 250px;
  /* background: red; */
`;
const Container = styled.div`
  padding: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
  color: #fff;
  background: #2e3097;
  flex-direction: column;
`;