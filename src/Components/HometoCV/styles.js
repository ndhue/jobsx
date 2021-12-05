import styled from "styled-components";

//---------------------------------------------------------------------------------
export const Container = styled.div`
  height: 1200px;
  background-image: url("../../assets/HometoCV.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const Content = styled.div`
  margin-left: 209px;

  display: flex;

  span {
    flex: 1;
  }
`;
//---------------------------------------------------------------------------------
export const Left = styled.div``;
export const Heading = styled.h1`
  letter-spacing: 2px;
  font-size: 90px;
`;
export const Button = styled.button`
  border: none;
  background: gray;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  font-weight: 650;
  transition: all 0.3s;
  color: white;
  margin-top: 18px;
  &:hover {
    color: #00c8aa;
    transform: scale(1.2);
    background-color: #ffffff;
  }
`;
//---------------------------------------------------------------------------------
export const Right = styled.div``;
export const Image = styled.img`
  margin-right: 200px;
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
//---------------------------------------------------------------------------------
