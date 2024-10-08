import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background: white;
  ${mobile({
    width: "83%",
  })}
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 30px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-widht: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.p`
  font-size: 18px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  padding: 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({
    marginLeft: "65px",
    width: "52%",
    fontSize: "20px",
  })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
