import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 2.5px solid #00000015;
`;

//-----------------------------------------------
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  img {
    padding: 10px;
    height: 70px;
    border-radius: 75px;
    width: 4%;
    margin-right: 16px;
  }
`;
//-----------------------------------------------

//-----------------------------------------------
export const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding: 13px;
`;
export const Company = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 30px;
`;
export const Name = styled.span`
  font-size: 30px;
  padding-bottom: 12px;
  padding-left: 2px;
`;
//-----------------------------------------------

//-----------------------------------------------
export const Contact = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 20px;
`;
export const ContactItem = styled.li`
  cursor: pointer;
  padding: 0 10px;
  a {
    text-decoration: none;
    font-size: 23px;
    color: black;
    letter-spacing: 0.5px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    font-weight: 400;

    &:hover {
      color: #33bfc4;
    }
  }
`;
//-----------------------------------------------

//-----------------------------------------------
export const Auth = styled.div`
  padding-right: 15px;
  button {
    cursor: pointer;
    border: none;
    height: 47px;
    width: 128px;
    font-size: 24px;
    color: white;
    letter-spacing: 0.5px;
  }
`;
export const Register = styled.button`
  background-color: #00c8aa;
  border-radius: 25px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.07);
  }
`;
export const SignIn = styled.button`
  /* background-color: #33bfc4; */
  border-radius: 25px;
  color: black !important;
  margin-left: 10px;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.07);
  }
`;
//-----------------------------------------------
