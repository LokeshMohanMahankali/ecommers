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
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getproducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        Products.filter((item, key) =>
          Object.entries(filters, key).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, Products, filters]);

  return (
    <>
      <Container>
        {filterproducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
