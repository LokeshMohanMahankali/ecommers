import styled from "styled-components";
import { categories } from "../pages/data";
import CategoryItems from "../components/CategoryItems";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
