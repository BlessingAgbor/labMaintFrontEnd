import React from 'react'
import styled from "styled-components"
const WhyUs = () => {
  return (
    <Container>
      <Why>Why choose Lab-Maint</Why>

      <Wrapper>
        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>

        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>
        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>

        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>

        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>
        <Card>
          <Top>General Planning</Top>
          <Description>
            We help companies plan on lab maintenance and facility management,
            also plan for efficiency of the lab
          </Description>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default WhyUs

const Description = styled.div``
const Top = styled.div`
color:#f15f1f;
font-size: 20px;
margin: 20px 0;
`
const Card = styled.div`
width:250px;
/* background: red; */
color: #2e3097;
margin: 0 20px;
margin: 15px 0;

`
const Why = styled.div`
font-family: poppins;
color: #f15f1f;
font-size: 25px;
`
const Wrapper = styled.div`
  width: 90%;
  flex-wrap: wrap;
  color: #2e3097;
  justify-content: space-around;
  display: flex;
  padding: 0 20px;

  /* justify-content:center; */
  /* align-items: center; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: poppins;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    margin: 30px 0;
  }
  /* height */
`;