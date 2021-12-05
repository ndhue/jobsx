import React, { useState } from "react";
import { Container } from "./styles";
function Index() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Container>
      <div className="previewProfilePic">
        <img className="playerProfilePic_home_tile" src={imgData} />
      </div>
      <div className="register_profile_image">
        <input id="profilePic" type="file" onChange={onChangePicture} />
      </div>
    </Container>
  );
}

export default Index;
