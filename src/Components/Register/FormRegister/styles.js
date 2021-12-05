import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2.5px solid #0000005c;
  height: 100%;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, 0.08) !important;
`;
//-------------------------------------------------------
export const Content = styled.div`
  margin: 80px;
`;
//-------------------------------------------------------
export const Head = styled.div`
  margin: 15px;
  margin-bottom: 5px;
`;

export const Name = styled.h3`
  font-size: 37px;
  letter-spacing: 1.5px;
  font-weight: 600;
`;
//-------------------------------------------------------
export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyItem = styled.input`
  height: 60px;
  padding: 0 30px;
  padding-right: 40px;
  border-radius: 16px;
  border: 2px solid #0000005c;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
`;

export const BodyGroupItem = styled.div`
  position: relative;
`;
export const BodyGroupItemButton = styled.button`
  position: absolute;
  top: 38px;
  right: 20px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

//-------------------------------------------------------
export const Foot = styled.div``;
export const FootItem = styled.button`
  border: none;
  height: 50px;
  padding: 0 20px;
  color: black;
  font-size: 17px;
  border-radius: 17px;
  background-color: #00c8aa;
  font-weight: 700;
  transition: all 0.3s;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;
