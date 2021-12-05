import React from "react";
import {
  Container,
  Content,
  Head,
  HeadTop,
  HeadBottom,
  Body,
  BodyLeft,
  BodyLeftTop,
  BodyLeftBottom,
  BodyRight,
} from "./styles";

function Index() {
  return (
    <Container>
      <Content>
        <Head>
          <HeadTop>JobsX Collab TDTU</HeadTop>
          <HeadBottom>
            / Projects by Student Ton Duc Thang University
          </HeadBottom>
        </Head>

        <Body>
          <BodyLeft>
            <BodyLeftTop>Introduce</BodyLeftTop>
            <BodyLeftBottom>
              The CV Website is based on a contest organized by Ton Duc Thang
              University.
              <br />
              <button>ABOUT US</button>
            </BodyLeftBottom>
          </BodyLeft>

          <BodyRight src="../../assets/Carousel-art.png"></BodyRight>
        </Body>
      </Content>
    </Container>
  );
}

export default Index;
