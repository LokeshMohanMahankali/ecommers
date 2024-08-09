import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { colors } from "@mui/material";

const Container = styled.div``;
const Title = styled.h1``;
const Filtercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    justifyContent: "space-around",
  })}
`;
const Filters = styled.div`
  margin: 25px;
  display: flex;
  gap: 5px;
  ${mobile({
    width: "30px",
    gap: "0px",
    marginLeft: "px",
  })}
`;

const Filtertext = styled.span`
  font-size: 27px;
  font-weight: 600;
  ${mobile({
    fontSize: "20px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    fontSize: "10px",
    marginRight: "20px",
  })}
`;

const Option = styled.option``;

const Productlist = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handlefilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> Dresses </Title>
      <Filtercontainer>
        <Filters>
          <Filtertext>Filter Products:</Filtertext>
          <Select name="color" onChange={handlefilters}>
            <Option value="Color">Color</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Orange">Orange</Option>
            <Option value="Pink">Pink</Option>
          </Select>
          <Select name="Size" onChange={handlefilters}>
            <Option disabled value="size">
              Size
            </Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="2XL">2XL</Option>
          </Select>
        </Filters>
        <Filters>
          <Filtertext>Sort products:</Filtertext>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filters>
      </Filtercontainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Productlist;
