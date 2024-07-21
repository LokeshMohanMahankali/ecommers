import Product from "../components/Product";
import { popularProducts } from "../pages/data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
