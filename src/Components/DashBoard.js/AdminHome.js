import React from 'react'
import styled from "styled-components"
import AdminSide from "./AdminSide"
import AdminView from './AdminView'
const AdminHome = () => {
  return (
    <div>
      {/* <Head></Head> */}

      <Container>
        <Wrapper>
          <SideScreen>
            <AdminSide />
          </SideScreen>
          <MainScreen>
            <AdminView />
          </MainScreen>
        </Wrapper>
      </Container>
    </div>
  );
}

export default AdminHome
const Head = styled.div`
height:70px;
background: green;
width: 100%;
`
const MainScreen = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* background: brown; */
  /* @media (max-width: 1000px) {
    width: 600px;
    display: flex;
    justify-content: center;
  } */
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: 100%;
  font-family: Poppins;

  /* background: palevioletred; */
  /* padding-top:70px; */
  display: flex;
  /* justify-content:center; */
`;
const SideScreen = styled.div`
  display: flex;
  width:300px;
  justify-content:flex-start;
  /* align-items: center; */
  background-color: #fafafa;
`;
const Wrapper = styled.div`
width:100%;

display: flex;


`