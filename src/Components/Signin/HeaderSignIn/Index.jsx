import React from "react";
import { Container, Name, SignIn, Company, Home, ButtonGroup } from "./styles";
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
      <ButtonGroup>
        <Home
          onClick={() => {
            nevigate("/");
          }}
        >
          Home
        </Home>
        <SignIn
          onClick={() => {
            nevigate("/register");
          }}
        >
          Register
        </SignIn>
      </ButtonGroup>
    </Container>
  );
}

export default Index;
