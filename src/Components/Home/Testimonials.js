import React from 'react'
import styled from "styled-components"

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <BText>Testimonials</BText>
          <SText>
            Read what our clients and companies are saying <br />
            about Lab Maint
          </SText>
        </Top>
        <Two>
          <Left>
            <Image />
          </Left>
          <Right>
            <Text>Reliability</Text>
            <Txt>
              I love Lab Maint, it is easy to keep records. When it comes to
              reliability it is a one stop hub to handle all my lab operations
              ranging from reagents supply, Lab staffs, Lab budgets and session
              tracking
            </Txt>
            <Who>
              <Img />
              <Div>
                <Name>Abubakar Sadiq</Name>
                <Detail>Lab specialist, Electrik lab, Cameroon</Detail>
              </Div>
            </Who>
          </Right>
        </Two>
        <Two>
          <One>
            <Hold>
              <Quote>"</Quote>
              <Quotes>
                I love Lab Maint, it is easy to keep records. When it comes to
                reliability it is a one stop hub to handle all my lab operations
                ranging from reagents supply, Lab staffs, Lab budgets and
                session tracking
              </Quotes>
            </Hold>
            <Who>
              <Avatar />
              <Div>
                <Name>Abubakar Sadiq</Name>
                <Detail>Lab specialist, Electrik lab, Cameroon</Detail>
              </Div>
            </Who>
          </One>
        </Two>
        <Users>
          <Span>Partels Lab</Span>
          <Span>Crane Mechanicals</Span>
          <Span>Electrika Lab</Span>
          <Span>Tribinov Africa</Span>
          <Span>Zaks Sparks</Span>
        </Users>
        <Question>
          <Want>Want to control your lab today?</Want>
          <Want>Join tech companies to efficiently manage lab facilities</Want>
          <Button>
            see plan
            <Icon />
          </Button>
        </Question>
        <Hire>
          <BText>Think of Hiring? </BText>
          <At>At Lab MAint we have the best hands to manage any facility</At>
          <CardHold>
            <Card>
              <Imag />
              <CardName>
                <span>Micha Sule</span>
                <span>
                  <Icon4 />
                </span>
              </CardName>
              <Descrip>
                <b>Micah Sule</b> is a science lab technician with five yerars
                experience working for various laboratories such as{" "}
                <span>Partels Lab</span>
              </Descrip>
              <Location>
                <Icon2 /> Pretoria South Africa
              </Location>
            </Card>
          </CardHold>
        </Hire>
        <Talk>
          <Top2>
            <div>
              <TText>Let's Talk</TText>
              <TText>See FAQs</TText>
            </div>
            <Contact>
              COntact us and let's know how we can serve you better
            </Contact>
          </Top2>
          <CardHold2>
            <Left2>
              <Imge />
            </Left2>
            <Right2>
              <Form>Contact Form</Form>
              <InputHold>
                <Up>
                  <Input />
                  <Input />
                </Up>
                <Input />
                <Input />
              </InputHold>
              <Button>Send <Icon3 /></Button>
            </Right2>
          </CardHold2>
        </Talk>
      </Wrapper>
    </Container>
  );
}

export default Testimonials

// const Container = styled.div``
const Talk = styled.div``
const CardHold2 = styled.div``
const Icon3 = styled.div``
const Input = styled.input``
const Up = styled.div``
const InputHold = styled.div``;
const Form = styled.div``
const Right2 = styled.div``
const Imge = styled.div``
const Left2 = styled.div``
const Contact = styled.div``
const TText = styled.div``
const Top2 = styled.div``
const Icon2 = styled.div``
const Location = styled.div``
const Descrip = styled.div``
const Icon4 = styled.div``
const CardName = styled.div``;
const Imag = styled.div``
const Card = styled.div``
const CardHold = styled.div``
const At = styled.div``
const Hire = styled.div``
const Icon = styled.div``
const Button = styled.div``
const Want = styled.div``
const Question = styled.div``
const Span = styled.div``
const Users = styled.div``
const Detail = styled.div``
const Name = styled.div``;
const Avatar = styled.div``
const Quotes = styled.div``
const Quote = styled.div``
const Hold = styled.div``
const One = styled.div``
const Div = styled.div``
const Img = styled.div``
const Who = styled.div``
const Txt = styled.div``
const Text = styled.div``
const Left = styled.div``;
const Right = styled.div``
const Image = styled.div``
const Two = styled.div``
const SText = styled.div``
const BText = styled.div``
const Top = styled.div``
const Wrapper = styled.div``
const Container = styled.div`
width: 100%;
height:calc(100vh - 70px);
display: flex;
justify-content:center;

`;