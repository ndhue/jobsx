import styled from "styled-components";

export const Container = styled.div`
  height: 842px;
  width: 595px;
  /* to centre page on screen*/
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  zoom: 170%;
  background-image: url("../../assets/template/templateone.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
`;
//---------------------------------------------------------------------------------
export const Left = styled.div``;

export const ContactControl = styled.div`
  padding-top: 20px;
`;

export const SummaryControl = styled.div`
  margin-top: 50px;
`;

export const AwardControl = styled.div`
  margin-top: 65px;
`;

export const AvatarControl = styled.div`
  margin: 14px;
  margin-top: 0;
  padding-top: 39px;
`;
//---------------------------------------------------------------------------------

export const Right = styled.div`
  margin-left: 80px;
  margin-top: 20px;
`;

export const Download = styled.button`
  background-color: #ffffff0f;
  border: none;
  border-radius: 30px;
  outline: none;
  color: black;
  padding: 10px;
  font-weight: 370;
  cursor: pointer;
  letter-spacing: 2px;
  color: gray;
  transition: all 0.35s;
  position: absolute;
  left: 47%;
  top: 3%;
  i {
    padding-right: 10px;
  }

  &:hover {
    color: white;
    letter-spacing: 4px;
    font-weight: 500;
  }
`;
export const DownloadDescreption = styled.span``;
