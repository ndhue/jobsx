import styled from "styled-components";

export const Container = styled.div``;

export const Info = styled.div``;

export const Fullname = styled.input`
  border: none;
  outline: none;
  position: relative;
  background: transparent;
  font-size: 25px;
  width: 100%;
  &::placeholder {
    color: black;
  }
`;
export const Line = styled.div`
  position: absolute;
  left: 46.4%;
  top: 35%;
  height: 1.2px;
  width: 120px;
  background-color: #03989e;
`;

export const JobsLocated = styled.input`
  margin-top: 25px;
  border: none;
  outline: none;
`;

//-----------------------------------------------------
export const Intro = styled.div`
  margin-top: 15px;
`;
export const IntroHeading = styled.h5`
  color: #03989e;
`;
export const IntroBody = styled.textarea`
  border: none;
  outline: none;
  width: 90%;
  height: 60px;
  font-size: 10px;
  overflow: hidden;
  text-align: justify;
`;
//-----------------------------------------------------
