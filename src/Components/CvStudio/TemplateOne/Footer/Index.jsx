import React from "react";
import {
  Container,
  Content,
  Heading,
  OutSideControl,
  University,
  UniversityDescreption,
} from "./styles";

function Index() {
  return (
    <Container>
      <Content>
        <Heading>QUÁ TRÌNH HỌC VẤN</Heading>
        <OutSideControl>
          <University placeholder="Nhập Trường ĐH của bạn"></University>
          <UniversityDescreption placeholder="Mô Tả chặng đường của bạn"></UniversityDescreption>

          <University placeholder="Nhập Vào Bằng Cấp của bạn"></University>
          <UniversityDescreption placeholder="Mô Tả chặng đường của bạn"></UniversityDescreption>
        </OutSideControl>
      </Content>
    </Container>
  );
}

export default Index;
