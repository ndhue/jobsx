import React from "react";
import {
  Info,
  Container,
  Fullname,
  Line,
  JobsLocated,
  Intro,
  IntroHeading,
  IntroBody,
} from "./styles";

function Index() {
  return (
    <Container>
      {/* INFO */}
      <Info>
        <Fullname placeholder="Nhập tên của bạn"></Fullname>
        <Line></Line>
        <JobsLocated placeholder="Nhập vị trí việc làm"></JobsLocated>
      </Info>

      {/* INTRODUCTION */}
      <Intro>
        <IntroHeading>GIỚI THIỆU</IntroHeading>
        <IntroBody placeholder="Nhập vào giới thiệu"></IntroBody>
      </Intro>
    </Container>
  );
}

export default Index;
