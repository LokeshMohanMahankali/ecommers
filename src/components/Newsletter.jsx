import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  background-color: #fcf5f5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    height: "40vh",
  })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 30px;
  ${mobile({
    fontSize: "50px",
  })}
`;
const Description = styled.div`
  font-size: 22px;
  font-weight: 200;
  margin-bottom: 30px;
  ${mobile({
    fontSize: "18px",
  })}
`;
const InputContainer = styled.div`
  height: 34px;
  width: 55%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>New letter</Title>
      <Description>Get timely updates form your favorite products.</Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
