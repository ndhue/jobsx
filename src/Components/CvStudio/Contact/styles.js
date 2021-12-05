import styled from "styled-components";

//----------------------------------------------
export const Container = styled.div`
  color: black;
`;
//----------------------------------------------
export const Head = styled.h6`
  padding-left: 35px;
`;
//----------------------------------------------
export const Body = styled.div``;
export const BodyItem = styled.div`
  margin: 4px;
  margin-left: 30px;
  i {
    font-size: 12px;
    padding-right: 10px;
  }
`;
export const BodyItemInput = styled.input`
  border: none;
  outline: none;
  position: relative;
  background: transparent;
  font-size: 10px;
  width: 80%;
  &::placeholder {
    color: black;
  }
`;

export const BodyItemInputLine = styled.div`
  position: absolute;
  left: 313px;
  height: 1.2px;
  width: 120px;
  background-color: #f2af3a;
`;
//----------------------------------------------
