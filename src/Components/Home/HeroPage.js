import React from 'react'
import styled from "styled-components"
import pix from "./Assets/undraw_creative_experiment_-8-dk3 (1).svg"
const HeroPage = () => {
  return (
    <Container>
        <Contacts>
            <Icon1 />
            <Icon2 />
            <Icon3 />
        </Contacts>
        <Wrapper>
            <Left>
                <H1>Welcome to Lab-Maint</H1>
                <Text>Taking the lead to help Companies manage<br />
                    and maintain lab facilities not only for records<br /> but safety of users 
                </Text>
                <Button>Learn more</Button>
            </Left>
            <Right>
                <Image src={pix} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default HeroPage
// const Left = styled.div``;
const Right = styled.div`
  /* flex: 2; */
  display: flex;
  width: 50%;
  @media (max-width: 800px) {
    width:100%;
  }

  /* background: red; */
`;
const Image = styled.img`
width:100%;
/* object-fit: cover; */
height:100%;
`;
const Button = styled.div`
  background: rgb(17, 10, 136);
  background: linear-gradient(
    90deg,
    rgba(17, 10, 136, 1) 0%,
    rgba(221, 219, 235, 1) 57%,
    rgba(250, 247, 252, 1) 99%,
    rgba(134, 119, 218, 1) 203%,
    rgba(217, 217, 217, 1) 217%
  );
  padding: 10px 0;
  width: 100px;
  color: #2e3097;
  border-radius: 4px;
  margin: 20px 0;
`;
const Text = styled.div`
font-weight: lighter;
font-size: 20px;
`;
const H1 = styled.div`
font-size: 25px;
margin-bottom: 30px;
/* width: 60%; */
`
;
const Left = styled.div`
  /* flex:1; */
  /* background: red; */
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  @media (max-width: 800px) {
    width: 95%;
    align-items: center;
    margin-bottom: 30px;
    text-align: center;
  }
`;


const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: poppins;
  color: #fff;
  height: calc(100vh - 70px);

  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(71, 42, 203, 1) 77%,
    rgba(134, 119, 218, 1) 203%,
    rgba(217, 217, 217, 1) 217%
  );
  @media (max-width: 800px) {
    height: 100%;
  }
`;
const Wrapper = styled.div`
width:80%;
display: flex;
justify-content:space-between;
align-items:center;
height: 100%;
@media (max-width: 800px) {
  flex-direction: column;
}
`

const Contacts = styled.div`
flex: 0.25;
`
const Icon1 = styled.div``
const Icon2 = styled.div``
const Icon3 = styled.div``
