import React from 'react'
import styled from "styled-components"
import { BsSearch } from "react-icons/bs";
import { MdInfo, MdOutlineAccessTimeFilled } from "react-icons/md";
import {GrLinkNext} from "react-icons/gr"
import { AiOutlineDown, AiFillSchedule } from "react-icons/ai";

const AdminView = () => {
  return (
    <Container>
      <Wrapper>
        <Top2>
          <DashBoard>
            <Text>Dashboard</Text>
            <Msg>
              Welcome back! <b>Kai</b>
            </Msg>
          </DashBoard>
          <Search>
            <InputHold>
              <Icon />
              <Input placeholder="Search" />
            </InputHold>
          </Search>
          <Owner>
            <Logo />
            <Details>
              <Name>Baze University</Name>
              <Location>Abuja, Nigeria</Location>
            </Details>
          </Owner>
        </Top2>
        <Holder>
          <Left>
            <Finance>
              <Hold>
                <TextHold>
                  <Report>Financial Report</Report>
                  <Time>
                    This week <Icon5 />
                  </Time>
                </TextHold>
                <TextHold>
                  <Price>$2,600</Price>
                  <Butt>+ Payment</Butt>
                </TextHold>
                <FootNote>Kai, this your balance for the week</FootNote>
              </Hold>
            </Finance>
            <Progress>
              <Hold2>
                <Top>
                  <Report>Progress Report</Report>
                  <Time>
                    This week <Icon2 />
                  </Time>
                </Top>
                <Image />
              </Hold2>
            </Progress>
            <Request>
              <Top3>
                <Report>Request</Report>
                <Time>
                  This week <Icon4 />
                </Time>
              </Top3>
              <Msg>You made 2 successful requests this week</Msg>
              <Notify>
                <Nav>
                  <Type>
                    <NameHold>
                      <Name> Radioactive research</Name>
                      <Lab>
                        <Div></Div>
                        <Name2>Partels research lab</Name2>
                      </Lab>
                    </NameHold>
                    <NameHold>
                      <Names>
                        Reasearch
                        <Time>
                          <Div></Div>
                          5d
                        </Time>
                      </Names>
                    </NameHold>
                    <BHold>
                      <Button>Appointment</Button>
                    </BHold>
                  </Type>
                  <Type>
                    <NameHold>
                      <Name> Radioactive research</Name>
                      <Lab>
                        <Div></Div>
                        <Name2>Partels research lab</Name2>
                      </Lab>
                    </NameHold>
                    <NameHold>
                      <Names>
                        Reasearch
                        <Time>
                          <Div></Div>
                          5d
                        </Time>
                      </Names>
                    </NameHold>
                    <BHold>
                      <Button>Appointment</Button>
                    </BHold>
                  </Type>
                  <SeeMore>
                    See more <Icon3 />
                  </SeeMore>
                </Nav>
              </Notify>
            </Request>
          </Left>
          <Right>
            <LabUse>
              <Topic>
                <Txt>Lab or Facility/ use</Txt>
              </Topic>
              {/* <Typ> */}
              <Tag>
                <div>Facility use</div>
                <Icon6 />
              </Tag>

              <NavHolder>
                <Navs> Create new </Navs>
                <Navs> On-going </Navs>
                <Navs style={{ border: "none" }}> See History </Navs>
              </NavHolder>
              <Txt2>
                <div> Check out on-going lab </div>
                <Icon7 />
              </Txt2>
              {/* </Typ> */}

              <Card>
                <Tops>
                  <Reports> Crane Lab</Reports>
                  <Times>Status</Times>
                </Tops>
                <STxt>
                  <div>
                    <div>Prototyping</div>
                    <div>
                      <Icons />
                      <span>22/03/6</span>
                    </div>
                  </div>
                  <div>Completed</div>
                </STxt>
                <View>
                  <Nxt>
                    View more <IconV />
                  </Nxt>
                  <Butn>Generate Session report</Butn>
                </View>
              </Card>

              <Card>
                <Tops>
                  <Reports> Partels Research Lab</Reports>
                  <Times>Status</Times>
                </Tops>
                <STxt>
                  <div>
                    <div>Collaboration</div>
                    <div>
                      <Icons />
                      <span>22/03/10</span>
                    </div>
                  </div>
                  <div>Paused</div>
                </STxt>
                <View>
                  <Nxt>
                    View more <IconV />
                  </Nxt>
                  <Butn>Generate Session report</Butn>
                </View>
              </Card>
            </LabUse>

            <Schedules>
              <Top4>
                <Head>Schedules</Head>
                <Today>Today <Tod /></Today>
                 </Top4>
              <SName>
                <b>Kai, </b>
                <Nxts>
                  You have a pending schedule <IconI />
                </Nxts>
              </SName>
              <Down>
                <Log></Log>
                <Detai>
                  <DName>Crane Mechanicals</DName>
                  <Status>Collaboration at Crane Mechanicals Lab</Status>
                  <IcHold>
                    <DHold>
                      <DIc />
                      23/03/11
                    </DHold>
                    <DHold>
                      <DIc2 />
                    10am
                    </DHold>
                  </IcHold>
                </Detai>
              </Down>
            </Schedules>
          </Right>
        </Holder>
      </Wrapper>
    </Container>
  );
}



export default AdminView
// const Top3 = styled.div``;
// const Top3 = styled.div``;
const DIc = styled(MdOutlineAccessTimeFilled)`

`;
const DIc2 = styled(AiFillSchedule)`

`;

const DHold = styled.div`
margin-right: 20px;
display: flex;
justify-content:center;
align-items:center;
`;
const IcHold = styled.div`
display: flex;
`;
const Status = styled.div``;
const DName = styled.div``;


const Detai = styled.div`
/* display: flex; */

`;
const Log = styled.div`
width:50px;
height:50px;
border-radius:3px;
background-color: #2e3097;
margin-right: 15px;
`;
const Down= styled.div`
padding-top: 15px 0;
padding-bottom: 10px;
width:100%;
/* background-color: red; */
display: flex;
`
const IconI = styled(MdInfo)`
margin-left: 10px;
`;
const Nxts = styled.div`
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content:center;
`;
const SName = styled.div`
display: flex;
`;
const Today = styled.div`
display: flex;
font-weight: lighter;
justify-content:center;
align-items:center;
`;
const Head = styled.div``;
const Tod = styled(AiOutlineDown)``;
const Schedules = styled.div`
width:100%;
display: flex;
border: 1px solid #2e3097;
flex-direction: column;
padding: 20px 10px;
margin-top: 30px;
border-radius: 4px;
`;

const Top4= styled.div`
width:100%;
/* background: red; */
display: flex;
justify-content:space-between;
align-items:center;

`

const View = styled.div`
/* width: 100%; */
display: flex;
align-items: center;
/* background: red; */
margin: 0 10px ;
justify-content:flex-end;
`
const Nxt = styled.div`
display: flex;
width:100%;
justify-content:center;
align-items:center;
margin-right: 7px;
/* margin: 10px 0; */
`
const IconV = styled(GrLinkNext)`
margin-right: 10px;
`;
const Butn = styled.div`
  font-size: 12px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(71, 42, 203, 1) 77%,
    rgba(134, 119, 218, 1) 203%,
    rgba(217, 217, 217, 1) 217%
  );
  width: 45%;
  padding: 7px 0;
  color: #fff;
  border-radius:3px;
  text-align: center;
`;

const Tops = styled.div`
width:100%;
display: flex;
/* background: red; */
justify-content:space-between;
`;
const Reports = styled.div`
font-weight: bolder;

`;
const Times = styled.div``;


const Icons = styled(AiFillSchedule)`

`;
const STxt = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
align-items: center;
`;
const SeeMore = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-end;
  align-items: center;
  color: #2e3097;
  padding: 10px;
`;
const Txt2 = styled.div`
  display: flex;
  font-weight: lighter;
  align-items:center;
  width: 100%;
  justify-content:flex-start;
`;
const Holder = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-around;
  /* background: red; */
`;

const Icon4 = styled.div``;
const Icon3 = styled(GrLinkNext)`
  margin-left: 10px;
`;
const Icon5 = styled.div``;

const Card = styled.div`
  width: 90%;
  display: flex;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px 10px;
  /* border: 1px solid #2e3097; */
  border-radius: 4px;
  flex-direction: column;
  height: 200px;
  margin-bottom: 20px;
`;

const Icon7 = styled(MdInfo)`
margin-left: 10px;
`;

const Navs = styled.div`
width:25%;
/* background: red; */
display: flex;
/* justify-content: center; */
align-items:center;
cursor: pointer;
height: 30px;
border-right: 1px solid #2e3097;
`;
const NavHolder = styled.div`
width:100%;
display: flex;
margin: 20px 0;

align-items: center;
justify-content:space-around;
`;

// const Typ = styled.div`
// flex:1;
// display: flex;
// justify-content:flex-end;
// background: red;
// `;

const LabUse = styled.div`
height:500px;
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
padding: 10px 10px;
align-items:center;
border-radius:4px ;
/* align-items:center; */
justify-content:center;
border: 1px solid #2e3097;
background: #fafafa;
`
const Topic = styled.div``
const Txt = styled.div`
font-weight: 550;
display: flex;
align-items: center;
/* justify-content:center; */
`
const Tag = styled.div`
width: 100%;
justify-content:flex-end;
cursor: pointer;
align-items: center;
display: flex;
`
const Icon6 = styled(AiOutlineDown)``;
const Msg = styled.div`
margin: 10px 0;
`
const Text = styled.div`
  color: #f15f1f;
  font-size: 23px;
  font-weight: 500;
`;
const DashBoard = styled.div`

`;

const Name2 = styled.div`
font-size: 12px;
display: flex;
justify-content:center;
/* background: blue; */
align-items:center;
margin-left: 10px;
`;
const Icon2 = styled.div``;
const Image = styled.div`
width:100%;
background: grey;
height: 100px;
`;
const Request = styled.div`
  width: 90%;
  min-height: 200px;

  background-color: #fafafa;
  display: flex;
  padding: 2px 15px;
  border-radius: 5px;
  border: 1.5px solid #2e3097;
  padding-bottom: 50px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Owner = styled.div`
display: flex;
justify-content: center;
align-items:center;

`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #2e3097;
  margin-right: 10px;
`;
const Details = styled.div`
  color: #2e3097;
`;
const Name = styled.div`
font-weight: 500;
`;
const Location = styled.div``;

const Finance = styled.div`
margin: 20px 0;
`;
const Hold = styled.div`
width:90%;
height:100px;
background-color:#fafafa;
display: flex;
padding: 4px 15px;
border-radius:5px;
border:1.5px solid #2e3097;
align-items: flex-start;
justify-content:center;
flex-direction: column;

`;
const Names = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  /* background: blue; */
  align-items: center;
`;

const TextHold = styled.div`
display: flex;
width:100%;
justify-content: space-between;
`;
const Hold2 = styled.div`
  display: flex;
  width: 90%;
  /* height: 100px; */
  background-color: #fafafa;
  padding: 4px 15px;
  border-radius: 5px;
  border: 1.5px solid #2e3097;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Report = styled.div`
font-weight:500;
font-size: 17px;



`;
const Time = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;

const Butt = styled.div`
  width:30%;
  margin: 5px 0;
  height: 30px;
  color: #2e3097;
  background-color: transparent;
  display: flex;
  justify-content:center;
  align-items:center;
  border: 1px solid #2e3097;
  border-radius: 3px;
`;
const Price = styled.div`
font-size:25px;
padding: 5px 0;
`;
const Button = styled.div`
  /* width:30%;
  height: 30px; */
  padding: 4px 10px;
  color:#fff;
  background-color: #f15f1f;
  display: flex;
  border-radius:3px;
  justify-content:center;
  align-items:center;
`;
const FootNote = styled.div``;
const Progress = styled.div`
display:flex;
margin:20px 0;
`;

const Notify = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
display: flex;
width:10px;
margin:0 10px;
height:10px;
background: grey;
justify-content: center;
align-items: center;
border-radius: 50%;
`;
const BHold = styled.div`
  flex: 1;
  display: flex;
  padding-right: 10px;
  padding-bottom: 10px;
  /* background-color:red; */
  justify-content: flex-end;
`;
const Nav = styled.div`
  flex: 1;
  /* display: flex; */
  /* background-color:yellow; */
  border-radius: 5px;
  border: 1px solid #2e3097;
`;
const Type = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  border-bottom: 1px solid #2e3097;
  /* align-items:center; */
  /* background: darkcyan; */
  justify-content: center;
`;
const NameHold = styled.div`
width:100%;
display: flex;
/* padding-top: 10px; */
/* background-color: darkgoldenrod; */
justify-content:space-between;
align-items:center;
`;
const Lab = styled.div`
display:flex;
justify-content:center;
align-items:center;
/* width: 100%; */
/* background: red; */
`;


const Left = styled.div`
width:50%;
height:100%;
/* background-color:plum; */
`
const Right = styled.div`
  min-width: 450px;
  /* width: ; */
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  /* background-color: red; */
`;
const Top3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  /* background-color: pink; */
`;
const Search = styled.div``;
const InputHold = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  border: 2px solid #2e3097;
  height: 40px;
  border-radius: 5px;
  background-color: #fafafa;
`;
const Icon = styled(BsSearch)`
  margin: 0 10px;
  color: #2e3097;

`;
const Input = styled.input`
  outline: none;
  border: 0;

  background-color: transparent;
  font-size: 16px;

  ::placeholder {
    font-family: Poppins;
    color: #2e3097;
  }
`;
const Top2 = styled.div`
  height: 10vh;
  display: flex;
  width:100%;
  align-items: center;
  /* background-color: pink; */
  justify-content:space-between;
`;
const Wrapper = styled.div`
width:100%;
display:flex;
align-items: center;
padding: 20px 30px;
flex-direction: column;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  color: #2e3097;
  font-family: Poppins;
  margin-bottom: 20px;
`;