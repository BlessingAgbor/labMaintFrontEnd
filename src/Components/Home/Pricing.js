import React from "react";
import styled from "styled-components";
const Pricing = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Heading>Pricing Plans</Heading>
          <Text>
            Lab Maint provides companies with amazing offers which enable them
            do more at low cost.
          </Text>
        </TextContainer>
        <CardHold>
          <Card>
            <Top>
              <Price>
                $<Num>0</Num>
              </Price>
              <span>/month</span>
            </Top>
            <OuterCircle>
              <Circle></Circle>
            </OuterCircle>

            <Plan>
              <span>Free plan</span>
              <Title>Basic</Title>
            </Plan>

            <Features>
              <Feature>3 user request</Feature>
              <Feature>10 orders per day</Feature>
              <Feature>Daily record updates</Feature>
              <Feature>Fully editables files</Feature>
            </Features>

            <Button>Choose this plan</Button>
          </Card>

          <Card>
            <Top>
              <Price>
                $<Num>19</Num>
              </Price>
              <span>/month</span>
            </Top>
            <OuterCircle>
              <Circle></Circle>
            </OuterCircle>

            <Plan>
              <span>Most popular plan</span>
              <Title>Professional</Title>
            </Plan>

            <Features>
              <Feature>100 user request</Feature>
              <Feature>30 orders per day</Feature>
              <Feature>Daily record updates</Feature>
              <Feature>Fully editables files</Feature>
              <Feature>Unlock all features</Feature>
            </Features>

            <Button>Choose this plan</Button>
          </Card>

          <Card>
            <Top>
              <Price>
                $<Num>29</Num>
              </Price>
              <span>/month</span>
            </Top>
            <OuterCircle>
              <Circle></Circle>
            </OuterCircle>

            <Plan>
              <span>for agencies</span>
              <Title>Enterprise</Title>
            </Plan>

            <Features>
              <Feature>Unlimited user request</Feature>
              <Feature>Unlimited orders per day</Feature>
              <Feature>Daily record updates</Feature>
              <Feature>Fully editables files</Feature>
              <Feature>Unlock all features</Feature>
            </Features>

            <Button>Choose this plan</Button>
          </Card>
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div`
  margin-bottom: 80px;

  width: 100%;
`;
const Heading = styled.div`
  color: orange;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  color: rgb(45, 47, 147);
  font-weight: 450;
  font-size: 18px;
  width: 425px;

  @media screen and (max-width: 425px) {
    width: 100%;
    font-size: 16px;
  }
`;
const CardHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px;
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 100%;
  min-height: 420px;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 425px) {
    width: 280px;
  }
`;

const Top = styled.div`
  color: white;
  background-color: rgb(45, 47, 147);
  margin-top: -50px;
  // width: 70px;
  position: absolute;
  padding: 15px;
  right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
`;
const Num = styled.span`
  font-size: 35px;
  font-weight: 400;
`;
const OuterCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid silver;
  padding: 15px;
  // background-color: silver;

  margin-bottom: 30px;
`;
const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;

  background-color: silver;
`;
const Plan = styled.div`
  color: orange;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  color: rgb(45, 47, 147);
  font-size: 28px;
  font-weight: 500;
`;
const Features = styled.div`
  color: rgb(45, 47, 147);
  font-weight: 400;
  margin-bottom: 30px;
`;
const Feature = styled.div`
  font-size: 16px;
  padding: 1px 0;
`;
const Button = styled.div`
  background-color: rgb(45, 47, 147);
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: rgba(45, 47, 147, 0.6);
  }
`;

// const Container = styled.div``
