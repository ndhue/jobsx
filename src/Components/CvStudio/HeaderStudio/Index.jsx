import React from "react";
import {
  Container,
  Left,
  Logo,
  Middle,
  Right,
  DirectHome,
  Name,
} from "./styles";

function Index() {
  return (
    <Container>
      {/* LEFT */}
      <Left>
        <Logo src="../../assets/logo-web2.png"></Logo>
        <Name>JobsX</Name>
      </Left>
      {/* MIDDLE */}
      <Middle></Middle>
      {/* RIGHT */}
      <Right>
        <DirectHome>Home</DirectHome>
      </Right>
    </Container>
  );
}

export default Index;
