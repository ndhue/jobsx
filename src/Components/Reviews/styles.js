import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
//--------------------------------------------------
export const Container = styled.div`
  height: 800px;
  background-image: url("../../assets/reviews/bgHome.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 50px;
  border-radius: 10px;
`;
//--------------------------------------------------
export const Head = styled.h1`
  text-align: center;
  padding: 39px 0;
  color: white;
  letter-spacing: 3px;
  font-size: 60px;
`;
//--------------------------------------------------
export const Body = styled.div`
  height: fit-content;
`;
export const BodySlider = styled.div`
  padding-left: 100px;

  .slick-slider {
    .slick-next {
      right: 85px;
    }

    .slick-dots {
      left: -50px;
    }
  }
`;
//--------------------------------------------------
