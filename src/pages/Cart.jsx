import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.span``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top></Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
