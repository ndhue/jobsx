import React from "react";
import { Container, OutSideControl } from "./styles";
import HeaderRegister from "./HeaderRegister/Index";
import FormRegister from "./FormRegister/Index";

function Index() {
  return (
    <Container>
      {/* SECTION 1 */}
      <HeaderRegister></HeaderRegister>
      {/* SECTION 2 */}
      <OutSideControl>
        <FormRegister></FormRegister>
      </OutSideControl>
    </Container>
  );
}

export default Index;
