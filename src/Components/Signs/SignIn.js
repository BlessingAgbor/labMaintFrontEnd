import React from "react";
import styled from "styled-components";
// import {Link} from "react-router-dom"
import { UpSign } from "./SignHome";
// import fb from '../../facebooklogo.png'
// import bg from "../../bg.jpg";

// import {Link } from "react-router-dom"
const SignUp = () => {
  return (
    <Container>
      <Wrap>
        <Right>
          <Bg>
            <Hold>
              <Logo>Lab-Maint</Logo>
              <P>Lab-Maint</P>
              {/* <Butt>
                <img alt="img" />
                Continue with Facebook{" "}
              </Butt> */}
            </Hold>
          </Bg>
        </Right>
        <Right>
          <UpSign />
        </Right>
      </Wrap>
    </Container>
  );
};

export default SignUp;
const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #2e3097;

  margin-bottom: 20px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Butt = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  img {
    width: 10%;
    margin-right: 15px;
    /* height:10%; */
  }
  padding: 5px 0;
  color: #fff;
  text-align: center;
  background: #004080;
`;
const P = styled.div`
  margin-bottom: 40px;
`;
const Hold = styled.div`
  display: flex;
  /* opacity: 1; */
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-left: 30px;
  /* align-items: center; */
  /* background: red; */
`;
const Bg = styled.div`
  /* width: 100; */
  height: 100%;
  /* background: darkorange; */
  /* opacity: 0.8; */

  /* position: relative; */
`;
const Logo = styled.div`
  font-size: 35px;
  font-family: Poppins;
  margin-bottom: 40px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  display: flex;
  /* margin:40px 0; */
`;
const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
  /* background: peachpuff; */
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: #2e3097;
  /* border */
  @media (max-width: 800px) {
    flex: 1;
  }
`;
const Left = styled.div`
  /* width: 50%; */
  flex: 1;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavHold = styled.div`
  display: flex;
  width: 100%;
  /* background:peru; */
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;
const Nav = styled.div`
  height: 50px;
  width: 40%;
  outline: none;
  border: none;
  text-decoration: none;

  /* font-family: Nunito; */
  :focus {
    /* background: darkorange; */

    border-bottom: 2px solid darkorange;
  }
  &.active {
    ::after {
      content: "";
      position: absolute;
      background-color: darkorange;
      height: 3px;
      width: 20%;
      left: 0;
      top: 21px;
      opacity: 1;
      transition: all 550ms;
      transform: scale(1);
      transform-origin: center left;
    }
  }
  :hover {
    cursor: pointer;
    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
