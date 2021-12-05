import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 80%;
  border: 2px solid #0000001f;
  border-radius: 10px;
  padding: 200px 20px;
  padding-top: 30px;
  background-color: #ffffffcc;
`;
//----------------------------------------------------
export const Content = styled.div``;
//----------------------------------------------------
export const Head = styled.div`
  display: flex;
  width: 100%;
`;
//--------
export const HeadLeft = styled.div`
  width: 80px;
  height: 80px;
`;
export const HeadLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;
//--------
export const HeadRight = styled.div`
  display: flex;
`;
//--------
export const HeadRightSectionOne = styled.div`
  margin-left: 10px;
`;
export const HeadInfoName = styled.h2``;
export const HeadInfoAddress = styled.div``;
//--------
export const HeadRightSectionTwo = styled.div`
  margin-left: 100px;
`;
export const HeadInfoLink = styled.a`
  color: black;
  i {
    font-size: 40px;
    border: 2px solid black;
    padding: 5px;
    border-radius: 11px;
    margin-left: 10px;
    transition: all 0.5s;

    &:hover {
      color: #00c8aa;
      border-color: #00c8aa;
      padding: 8px;
    }
  }
`;
//----------------------------------------------------
export const Body = styled.div``;
export const Descreption = styled.p`
  font-size: 20px;
  text-align: justify;
`;
