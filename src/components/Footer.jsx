import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  margin-top: 35px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactItem = styled.div`
  display: flex;
`;

const Payment = styled.img`
  width: 15rem;
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
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> 622 Dixie Path ,
          South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem>
        <Payment
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="paymentimages"
        />
      </Right>
    </Container>
  );
};

export default Footer;
