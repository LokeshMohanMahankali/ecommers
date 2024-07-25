import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 20px;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Desc = styled.div`
  width: 20rem;
  margin-bottom: 10px;
`;
const SocialContaner = styled.div`
  display: flex;
  gap: 10px;
`;
const Socialicons = styled.div`
  background-color: #${(props) => props.color};
  border-radius: 20px;
  padding: 7px;
  width: 40px;
  height: 40px;
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;

const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContaner>
          <Socialicons color="3B5999">
            <FacebookIcon />
          </Socialicons>
          <Socialicons color="E4405F">
            <InstagramIcon />
          </Socialicons>
          <Socialicons color="55ACEE">
            <XIcon />
          </Socialicons>
          <Socialicons color="E60023">
            <PinterestIcon />
          </Socialicons>
        </SocialContaner>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
