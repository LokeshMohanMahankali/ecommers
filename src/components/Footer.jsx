import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Container = styled.div`
  display: flex;
`;

const Logo = styled.div``;
const Desc = styled.div``;
const SocialContaner = styled.div``;
const Socialicons = styled.div``;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
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
          <Socialicons>
            <FacebookIcon />
          </Socialicons>
          <Socialicons>
            <InstagramIcon />
          </Socialicons>
          <Socialicons>
            <XIcon />
          </Socialicons>
          <Socialicons>
            <PinterestIcon />
          </Socialicons>
        </SocialContaner>
      </Left>
      <Center> </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
