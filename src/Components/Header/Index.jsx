import React, { useEffect, useState } from "react";
import {
  Container,
  Logo,
  Contact,
  Auth,
  Content,
  ContactItem,
  Company,
  Name,
  Register,
  SignIn,
} from "./styles";

import { useNavigate } from "react-router-dom";

function Index() {
  const nevigate = useNavigate();
  const [status, handleStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login") === "success") {
      handleStatus(true);
    }
  }, []);
  return (
    <Container>
      <Content>
        <Company>
          <Logo key="1" src="../../assets/logo-web2.png" alt="logo-web"></Logo>
          <Name>JobsX</Name>
        </Company>

        <Contact>
          <ContactItem>
            <a href="">CV Template</a>
          </ContactItem>
          <ContactItem>
            <a href="">Contact US</a>
          </ContactItem>
          <ContactItem>
            <a href="">Reviews</a>
          </ContactItem>
          <ContactItem>
            <a href="">Feed Back</a>
          </ContactItem>
        </Contact>

        {status ? (
          <img
            key="2"
            src="../../assets/template/avatar-template-1.jpg"
            alt="avt-user"
          />
        ) : (
          <>
            <Auth>
              <Register
                onClick={() => {
                  nevigate("/register");
                }}
              >
                Register
              </Register>
              <SignIn
                onClick={() => {
                  nevigate("/signin");
                }}
              >
                Sign In
              </SignIn>
            </Auth>
          </>
        )}
      </Content>
    </Container>
  );
}

export default Index;
