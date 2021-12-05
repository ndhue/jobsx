import styled from "styled-components";

export const Container = styled.div`
  height: 900px;
  width: 100%;
  background-position: center center;
  background-image: url("../../assets/carousel-bg.png");
  background-size: cover;
`;
//--------------------------------------------------------------
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//--------------------------------------------------------------
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 58%;
  padding-top: 5%;
  padding-bottom: 3%;
`;
export const HeadTop = styled.div`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
export const HeadBottom = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
  color: gray;
  padding-top: 2px;
`;
//--------------------------------------------------------------
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #00000024;
  border-radius: 20px;
  width: 80%;
  backdrop-filter: blur(27px);
  background-color: rgba(255, 255, 255, 0.08) !important;
`;
//--------------------------------------------------------------
export const BodyLeft = styled.div`
  padding-left: 30px;
`;
export const BodyLeftTop = styled.p`
  font-size: 50px;
  letter-spacing: 3px;
`;
export const BodyLeftBottom = styled.div`
  margin-top: 20px;
  font-size: 20px;

  button {
    margin-top: 13px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.7px;
    height: 45px;
    padding: 0 15px;
    cursor: pointer;
    transition: cubic-bezier(0.6, -0.28, 0.735, 0.045);

    &:hover {
      background-color: #00c8aa;
      color: white;
      font-weight: 600;
    }
  }
`;
//--------------------------------------------------------------
export const BodyRight = styled.img`
  transform: scale(1.4);
  padding-left: 80px;
  margin-top: 30px;
`;
