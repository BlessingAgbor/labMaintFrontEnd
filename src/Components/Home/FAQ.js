import React from 'react'
import styled from "styled-components"
const FAQ = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Fq>FAQ</Fq>
          <Text>Check out most Frequently Asked Question</Text>
          <Text>You might find helpful tips</Text>
        </Top>

        <Boxes>
          <Blue>
            <span>+</span>What is Lab Maint
          </Blue>
          <Orange>
            <span>*</span>
            <div>
              <Txt>Our Vision at Lab-Maint</Txt>
              <STxt>
                Our Lab Management product and platform are designed to enable
                the building of an innovative R&D, Commercialisation and
                Management Operations and make us the go-to brand for Scientific
                Research and Development Funding in Africa in 5 years time.
              </STxt>
            </div>
          </Orange>
          <Yellow>
            <span>+</span>
            <Txt>What card are supported</Txt>
          </Yellow>
        </Boxes>
      </Wrapper>
      
    </Container>
  );
}

export default FAQ




const Yellow = styled.div`
  width: 70%;
  display: flex;
  background:#FCCB0A;
  color: #fff;
  min-height: 90px;
    align-items: center;
  padding: 0 20px;
  span {
    margin-right: 15px;
  }
  border-radius: 6px;
`;

const STxt = styled.div``
const Txt = styled.div``
const Orange = styled.div`
  min-height: 140px;
  /* height: 100%; */

  background: darkorange;
  color: #fff;
  display: flex;
  width: 70%;
  display: flex;

  border-radius: 6px;
  margin: 30px 0;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
  padding: 0 20px;
  span {
    margin-right: 15px;
  }
`;
const Blue = styled.div`
  span {
    margin-right: 15px;
  }
  width: 70%;
  border-radius: 6px;
  padding: 0 20px;
  background: #2e3097;
  display: flex;
  align-items: center;
  color: #fff;
  height: 90px;
`;
const Boxes = styled.div`
  width: 100%;
  height: 500px;
  /* background: #fff; */
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  flex-direction: column;
`;
const Text = styled.div`
font-size: 15px;
font-weight: 300;
`
const Fq = styled.div`
font-size: 20px;
color:#f15f1f;
`
const Top = styled.div`
  width: 100%;
  display: flex;
  font-family: poppins;

  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  /* background-color: pink; */
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background: #fff;
`;
const Container = styled.div`
width: 100%;
height: 100%;
font-family: poppins;
min-height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
/* background: pink; */
flex-direction: column;
margin: 30px 0;
`;