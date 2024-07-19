import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";

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
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-item: center;
  height: 100vw;
  width: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const Infocontainer = styled.div`
  flex: 1;
  padding: 50px;
  background-color: white;
`;

const Title = styled.h1``;
const Desc = styled.p1``;
const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </ImgContainer>
          <Infocontainer>
            <Title>Summer SAL</Title>
            <Desc>
              Don'T COMPOMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </Infocontainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
