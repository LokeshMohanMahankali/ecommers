import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1``;
const Filtercontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filters = styled.div`
  margin: 25px;
  display: flex;
  gap: 5px;
`;

const Filtertext = styled.span`
  font-size: 27px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const Productlist = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> Dresses </Title>
      <Filtercontainer>
        <Filters>
          <Filtertext>Filter Products:</Filtertext>
          <Select>
            <Option>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Orange</Option>
            <Option>Pink</Option>
          </Select>
          <Select>
            <Option>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
          </Select>
        </Filters>
        <Filters>
          <Filtertext>Sort products:</Filtertext>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filters>
      </Filtercontainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Productlist;
