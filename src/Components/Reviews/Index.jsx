import React from "react";
import { Container, Head, Body, BodySlider } from "./styles";
import Slider from "react-slick";
import { reviewsData } from "../../Data/DataReviews";
import ReviewsForm from "../ReviewsForm/Index";
function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Head>Reviews</Head>
      <Body>
        <BodySlider>
          <Slider {...settings}>
            {reviewsData?.map((item) => {
              return (
                <ReviewsForm
                  avatar={item.avatar}
                  name={item.name}
                  address={item.address}
                  link={item.link}
                  descreption={item.descreption}
                />
              );
            })}
          </Slider>
        </BodySlider>
      </Body>
    </Container>
  );
}

export default Index;
