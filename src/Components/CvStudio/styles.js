import styled from "styled-components";

export const Container = styled.div`
  background-color: #425061;
  height: 2200px;
`;

export const Heading = styled.h1`
  padding-left: 440px;
  color: white;

  &::after {
    content: "";
    display: block;
    height: 2px;
    margin-top: 10px;
    background-color: #00c8aa;
    width: 260px;
  }
`;

export const A4Section = styled.div`
  margin-top: 50px;
`;
