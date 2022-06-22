import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import styled from "styled-components"
import pix from "./Assets/photo-1599727277643-b0c9cfb7705d.avif"
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Top>About Us</Top>
        <Text1>
          Read about us to explore a new side of lab management
          <br /> with efficiency to handle lab facilities and lab management
        </Text1>
        <Two>
          <Image src={pix} />
          <Text>
            Lab management platform was designed
            <br /> to enable the building of an innovation R&D, <br />
            Commercialisation and management operations.
            <br />
            <b>Lab Maint</b>, a platform to tackle poor Lab Management and
            maintenance by providing
            <br /> effective, reliable and automated workbook to <br />
            handle the entire lab operations.
            <Button>
              Read more <Icon />
            </Button>
          </Text>

          {/* <Hold></Hold> */}
        </Two>
      </Wrapper>
    </Container>
  );
}

export default About

// const Hold = styled.div`
// /* width: 100%; */
// `
const Icon = styled(GrLinkNext)`
margin-left: 10px;
color:#fff;
/* background: #fff; */
`;
const Button = styled.div`
  /* padding: 10px 10px; */
  background: #2e3097;
  color: #fff;
  display: flex;
  align-items: center;
  /* justify-content:center; */
  height: 50px;
  width: 20%;
  padding: 0 5px;
  border-radius: 4px;
  margin-top: 20px;
  transition: all 350ms;

  :hover {
    transition: all 350ms;
    transform: scale(1.05);
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 40%;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  height: 300px;
  border-radius: 5px;
  @media (max-width: 800px) {
    /* flex:1; */
    width: 100%;
  }
`;
const Two = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  /* background-color:red; */
  /* align-items: center; */
  @media (max-width: 800px) {
    flex-direction: column;
    /* align-items: center; */
    /* justify-content:center; */
  }
`;
const Text1 = styled.div`
  font-weight: light;
  margin-bottom: 40px;
  color: #2e3097;
`;
const Text = styled.div`
  font-weight: light;
  color: #2e3097;
  /* width:70%; */
  margin-left: 50px;
  line-height: 2;
  /* font-size: px; */
  /* background: pink; */
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-left: 0;

    /* align-items: center; */
    flex-direction: column;
  }
`;
const Top = styled.div`
  font-size: 19px;
  color: #f15f1f;
margin: 30px 0;
`;
const Wrapper = styled.div`
width:90%;
display: flex;
justify-content:center;
/* align-items: center; */
padding: 10px 0;
flex-direction: column;
@media (max-width: 800px) {
  /* align-items: center; */
}
`
const Container = styled.div`
width: 100%;
display: flex;
font-family: poppins;
justify-content:center;
align-items: center;
margin-bottom: 20px;
`;