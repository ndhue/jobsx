import React from "react";
import { Container } from "./styles";
import Header from "../Header/Index";
import Carousel from "../Carousel/Index";
import Footer from "../Footer/Index";
import Reviews from "../Reviews/Index";
import HometoCV from "../HometoCV/Index";

function Index() {
  return (
    <Container>
      <Header></Header>
      <Carousel></Carousel>
      <HometoCV></HometoCV>
      <Reviews></Reviews>
      <Footer></Footer>
    </Container>
  );
}

export default Index;
