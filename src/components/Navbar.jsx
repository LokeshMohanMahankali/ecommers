import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left header part /////////////////////////////////////////////////////////////////
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`;

// Center header part ///////////////////////////////////////////////////////////////
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
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
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "14px" }} />
          </Searchcontainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <Menuitems>Register</Menuitems>
          <Menuitems>Sign-In</Menuitems>
          <Menuitems>
            <Badge color="secondary" badgeContent={5}>
              <ShoppingCartIcon />
            </Badge>
          </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
