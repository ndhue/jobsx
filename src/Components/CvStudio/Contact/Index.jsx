import React, { useState, useEffect } from "react";
import {
  Container,
  Head,
  Body,
  BodyItem,
  BodyItemInput,
  BodyItemInputLine,
} from "./styles";

function Index({ heading }) {
  const [hideLine, handleHideLine] = useState({
    address: false,
    mail: false,
    phone: false,
    linkedin: false,
  });

  return (
    <Container>
      <Head>{heading}</Head>
      <Body>
        {/* ITEM - 1  */}
        <BodyItem>
          <i class="fas fa-map-marker-alt"></i>
          <BodyItemInput
            style={{ marginLeft: 2.7 }}
            placeholder="Địa chỉ "
            onClick={() => {
              handleHideLine({
                ...hideLine,
                address: true,
              });
            }}
          ></BodyItemInput>
          {hideLine.address ? <> </> : <BodyItemInputLine></BodyItemInputLine>}
        </BodyItem>

        {/* ITEM - 2  */}
        <BodyItem>
          <i class="fas fa-envelope-open"></i>
          <BodyItemInput
            type="email"
            placeholder="Thư Điện Tử "
            onClick={() => {
              handleHideLine({
                ...hideLine,
                mail: true,
              });
            }}
          ></BodyItemInput>
          {hideLine.mail ? <> </> : <BodyItemInputLine></BodyItemInputLine>}
        </BodyItem>

        {/* ITEM - 3  */}
        <BodyItem>
          <i class="fas fa-phone"></i>
          <BodyItemInput
            type="text"
            placeholder="Số Điện Thoại"
            onClick={() => {
              handleHideLine({
                ...hideLine,
                phone: true,
              });
            }}
          ></BodyItemInput>
          {hideLine.phone ? <> </> : <BodyItemInputLine></BodyItemInputLine>}
        </BodyItem>

        {/* ITEM - 4  */}
        <BodyItem>
          <i class="fab fa-linkedin"></i>
          <BodyItemInput
            style={{ marginLeft: 2.7 }}
            placeholder="Liên kết"
            onClick={() => {
              handleHideLine({
                ...hideLine,
                linkedin: true,
              });
            }}
          ></BodyItemInput>
          {hideLine.linkedin ? <> </> : <BodyItemInputLine></BodyItemInputLine>}
        </BodyItem>
      </Body>
    </Container>
  );
}

export default Index;
