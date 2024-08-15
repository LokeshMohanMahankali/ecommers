import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    flexDirection: "column",
    padding: "20px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
  ${mobile({
    flexDirection: "column",
    padding: "20px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    width: "100%",
    height: "40vh",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  ${mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-item: center;
  gap: 5px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-width: 600;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 15px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
  width: 10px;
  height: 10px;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-item: center;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainter = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
`;
const Button = styled.button`
  background-color: white;
  padding: 10px;
  border: 2px solid teal;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getproduct();
  }, [id]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainter>
              <AddIcon />
              <Amount>1</Amount>
              <RemoveIcon />
            </AmountContainter>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
