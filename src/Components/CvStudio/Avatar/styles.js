import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  width: 147px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../assets/template/avatar-default.jpg");
  background-position: center center;
  border-radius: 81px;

  .previewProfilePic {
    img {
      height: 150px;
      width: 147px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 81px;
    }
    position: relative;
  }

  .register_profile_image {
    input {
      position: absolute;
      top: 200px;
      left: 10%;
      margin-left: 20px;
      margin-top: 10px;
      width: 99px; /*play with this value */
      height: 30px; /*play with this value */
      border: none;
      overflow: hidden;
      border: 1px dashed #bbb;
    }
    #profilePic {
    }
  }
`;
