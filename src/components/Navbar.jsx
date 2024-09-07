import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// left header part /////////////////////////////////////////////////////////////////
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    flex: 2,
    justifycontent: "10px",
    alignitems: "center",
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const Searchcontainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

// Center header part ///////////////////////////////////////////////////////////////
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  color: black;
  ${mobile({
    fontSize: "24px",
    margin: "0px 40px 0px 0px",
  })};
`;

// Right header part /////////////////////////////////////////////////////////////////
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menuitems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "14px",
    margin: "0px 25px 0px 0px",
    display: "flex",
    alignitems: "center",
  })}
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Input placeholder="Search .." />
            <SearchIcon style={{ color: "gray", fontSize: "14px" }} />
          </Searchcontainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>LAMA</Logo>
          </Link>
        </Center>
        <Right>
          <Menuitems>Register</Menuitems>
          <Link to="/Login">
            <Menuitems>Sign-In</Menuitems>
          </Link>
          <Link to="/cart">
            <Menuitems>
              <Badge color="secondary" badgeContent={quantity}>
                <ShoppingCartIcon />
              </Badge>
            </Menuitems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
