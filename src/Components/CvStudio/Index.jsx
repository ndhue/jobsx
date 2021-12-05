import React from "react";
import { Container, A4Section, Heading } from "./styles";
import HeaderStudio from "./HeaderStudio/Index";
import TemplateOne from "./TemplateOne/Index";

function Index() {
  return (
    <Container>
      {/* Header Page */}
      <HeaderStudio></HeaderStudio>
      {/* Heading TITLE */}
      <Heading>CV Template</Heading>
      {/* A4 SECTION */}
      <A4Section>
        <TemplateOne></TemplateOne>
      </A4Section>
    </Container>
  );
}

export default Index;
