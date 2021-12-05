import React from "react";
import {
  Container,
  Content,
  Experience,
  Position,
  PositionDescreption,
} from "./styles";

function Index() {
  return (
    <Container>
      <Experience>KINH NGHIỆM LÀM VIỆC</Experience>

      <Content>
        <Position placeholder="Vị trí công việc 1"></Position>
        <PositionDescreption placeholder="Mô tả vị trí công việc 1"></PositionDescreption>

        <Position placeholder="Vị trí công việc 2"></Position>
        <PositionDescreption placeholder="Mô tả vị trí công việc 2"></PositionDescreption>
      </Content>
    </Container>
  );
}

export default Index;
