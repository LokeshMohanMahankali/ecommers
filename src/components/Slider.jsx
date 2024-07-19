import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";

const Slider = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
  `;

  const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-item: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
  `;

  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
