import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//--------------------------------------
export const Left = styled.div`
  padding: 10px;
`;
export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
`;
export const Name = styled.span`
  color: white;
  font-weight: 600;
  letter-spacing: 4.5px;
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;
//--------------------------------------
export const Middle = styled.div``;

//--------------------------------------
export const Right = styled.div``;
export const DirectHome = styled.button`
  border: none;
  background-color: #33bfc4;
  font-weight: 600;
  padding: 9px 20px;
  color: #fff;
  border-radius: 20px;
  margin-right: 10px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #fff;
    transform: scale(1.1);
    background-color: lightgray;
    color: black;
  }
`;
//--------------------------------------
