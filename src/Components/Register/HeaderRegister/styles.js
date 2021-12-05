import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2.5px solid #80808052;
  align-items: center;
  padding: 3px;
  padding-right: 14px;
`;

//--------------------------------------------------------------------------
export const Company = styled.button`
  background: transparent;
  border: none;
  outline: none;

  &:active {
    border: none;
    outline: none;
  }
`;
export const Name = styled.p`
  font-size: 24px;
  padding: 14px;
  padding-left: 26px;
  font-weight: 500;
  cursor: pointer;
`;
//--------------------------------------------------------------------------

export const SignIn = styled.button`
  border: none;
  border-radius: 20px;
  height: 50px;
  padding: 0 25px;
  font-size: 19px;
  background-color: #8080805c;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #00c8aa;
  }
`;
//--------------------------------------------------------------------------
export const OutSideControl = styled.div``;
export const Home = styled.button`
  border: none;
  border-radius: 20px;
  height: 50px;
  padding: 0 25px;
  font-size: 19px;
  background-color: #8080805c;
  transition: all 0.15s;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    color: white;
    background-color: #00c8aa;
  }
`;
