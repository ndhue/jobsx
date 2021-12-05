import styled from "styled-components";
//-------------------------------------------------
export const Container = styled.div`
  background-color: rgb(66, 80, 97);
  height: 100px;
`;
//-------------------------------------------------
export const ContactList = styled.div`
  text-align: center;
`;
//-------------------------------------------------
export const ContactListItem = styled.a`
  font-size: 35px;
  cursor: pointer;
  i {
    color: white;
    margin: 10px;
    border: 5px solid white;
    padding: 10px;
    border-radius: 25px;
    transition: all 0.5s;

    &:nth-child(1) {
      padding: 15px;
    }
  }

  &:hover {
    i {
      color: #00c8aa;
      border: 5px solid #00c8aa;
      transform: scale(1.15);
    }
  }
`;
//-------------------------------------------------
