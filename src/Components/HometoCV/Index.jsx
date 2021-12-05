import React from "react";
import {
  Container,
  Heading,
  Button,
  Content,
  Left,
  Right,
  Image,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cvtemplate");
  };
  return (
    <Container>
      <Content>
        {/* LEFT */}
        <Left>
          <Heading>CV STUDIO</Heading>
          <Button
            onClick={() => {
              handleClick();
            }}
          >
            LET'S GO
          </Button>
        </Left>
        <span></span>
        {/* RIGHT */}
        <Right>
          <Image src="../../assets/cvtemplate.png" alt="CV-image"></Image>
        </Right>
      </Content>
    </Container>
  );
}

export default Index;
