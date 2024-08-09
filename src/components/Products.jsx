import { useEffect, useState } from "react";
import Product from "../components/Product";
import { popularProducts } from "../pages/data";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [Products, setProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get("http://localhost:500/api/products");
      } catch (err) {}
    };
  }, [cat]);

  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
