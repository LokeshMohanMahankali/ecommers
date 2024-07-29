import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 16px;
  ${mobile({
    margin: "0px 0px 0px 0px",
  })}
`;
const Announcment = () => {
  return <Container>Super Deal! Free Shipping On Orders over $50</Container>;
};

export default Announcment;
