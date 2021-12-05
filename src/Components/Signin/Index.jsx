import React from "react";
import { Container, OutSideControl } from "./styles";
import HeaderSignIn from "./HeaderSignIn/Index";
import FormSignIn from "./FormSignIn/Index";
function Index() {
  return (
    <Container>
      <HeaderSignIn></HeaderSignIn>

      <OutSideControl>
        <FormSignIn></FormSignIn>
      </OutSideControl>
    </Container>
  );
}

export default Index;
