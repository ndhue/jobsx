import React from "react";
import {
  Container,
  Name,
  SignIn,
  Company,
  OutSideControl,
  Home,
} from "./styles";

import { useNavigate } from "react-router-dom";

function Index() {
  const nevigate = useNavigate();

  return (
    <Container>
      {/* Brand */}
      <Company
        onClick={() => {
          nevigate("/");
        }}
      >
        <Name>Bonjour , Welcome to JobsX</Name>
      </Company>
      {/* Authencation */}
      <OutSideControl>
        <Home
          onClick={() => {
            nevigate("/");
          }}
        >
          Home
        </Home>
        <SignIn
          onClick={() => {
            nevigate("/signin");
          }}
        >
          Sign In
        </SignIn>
      </OutSideControl>
    </Container>
  );
}

export default Index;
