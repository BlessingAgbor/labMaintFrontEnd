import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom"
export const InSign = () => {
  return (
    <Container>
      {/* <Wrap> */}
      <Hold>
        {/* <Image src={fb} /> */}
        <Inputs placeholder="Username" />
        <Inputs type="email" placeholder="email" />
        <Inputs type="password" placeholder="password" />
        

        <Butt>SIGN IN</Butt>
      </Hold>
      {/* </Wrap> */}
    </Container>
  );
};

export const UpSign = () => {
  return (
    <Container>
      {/* <Wrap> */}
      {/* <ImageHolder>
        <Image />
        <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
        <ImageInput
          id="pix"
          // onChange={handleImage}
          type="file"
          // accept="image/*"
        />
      </ImageHolder> */}

      <Hold>
        <ImageHolder>
          <Sgn>
            <div>Already have an account, <Icon to ="/signin">Sign In</Icon></div> 
          </Sgn>
          <Sgn2>
            <div>Welcome to Lab-Maint!</div>
            <Div>Register your account</Div>
          </Sgn2>
        </ImageHolder>
        <Inputs placeholder="Username" />
        <Inputs type="email" placeholder="email" />
        <Inputs type="password" placeholder="password" />
        <Inputs placeholder="Country" />
        <Inputs placeholder="Phone number" />
        <Inputs placeholder="Address" />
        <select>
          <option>Carpentry</option>
          <option>University Lab</option>
          <option>Biochemical Lab</option>
        </select>
        <Butt>SIGN UP</Butt>
      </Hold>
      {/* </Wrap> */}
    </Container>
  );
};

const Icon = styled(Link)`
  text-decoration: none;
`;

const Sgn = styled.div`
width:100%;
display: flex;
justify-content: flex-end;



`
const Sgn2 = styled.div`
div{
  font-size: 20px;
  color:darkorange;
}
`;
const Div = styled.div``;

const Hold = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color:#fafafa;
  align-items: center;
  select {
    padding: 10px 5px;
    width: 60%;
    margin: 20px 0;
    outline: none;
    border: 1px solid silver;
    ::placeholder {
      font-family: Poppins;
    }
    :focus {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
  }
`;
const Butt = styled.div`
  padding: 10px 40px;
  /* width: 60%; */
  margin: 20px 0;
  color:#fff;
  outline: none;
  background-color: #2e3097;

  /* border: 1px solid silver; */
  /* :focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  } */
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Inputs = styled.input`
  padding: 10px 5px;
  width: 60%;
  margin: 20px 0;
  outline: none;
  border: 1px solid silver;
  ::placeholder {
    font-family: Poppins;
  }
  :focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
// const Hold = styled.div``
// const Hold = styled.div``;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: darkorange;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 80%;
  /* align-items: center; */
  /* padding: 10px 10px; */

  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  background-color: darkorange;
  margin-bottom: 20px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: plum; */
  width: 100%;
  color:#2e3097;
  font-family: poppins;
`;
const Wrap = styled.div``;
