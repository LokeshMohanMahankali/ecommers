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
      } catch (err) {}
    };
    getproducts();
  }, [cat]);

  // For Filter products:
  useEffect(() => {
    cat &&
      setFilterProducts(
        Products.filter((item, key) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, Products, filters]);

  // For sort products:
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <>
      <Container>
        {}
        {cat
          ? filterproducts.map((item) => <Product item={item} key={item.id} />)
          : Products.slice(0, 3).map((item) => (
              <Product item={item} key={item.id} />
            ))}
      </Container>
    </>
  );
};

export default Products;
