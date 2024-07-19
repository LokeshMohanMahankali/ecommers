import styled from "styled-components";

const Announcment = () => {
  const Container = styled.div`
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 16px;
  `;
  return <Container>Super Deal! Free Shipping On Orders over $50</Container>;
};

export default Announcment;
