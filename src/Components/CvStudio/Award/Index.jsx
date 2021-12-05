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
          <i class="fas fa-award"></i>
          <BodyItemInput
            style={{ marginLeft: 2.7 }}
            placeholder="Kĩ Năng 1"
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
          <i class="fas fa-award"></i>
          <BodyItemInput
            type="email"
            placeholder="Kĩ Năng 2"
            style={{ marginLeft: 2.7 }}
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
          <i class="fas fa-award"></i>
          <BodyItemInput
            type="text"
            placeholder="Kĩ Năng 3"
            style={{ marginLeft: 2.7 }}
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
          <i class="fas fa-award"></i>
          <BodyItemInput
            style={{ marginLeft: 2.7 }}
            placeholder="Kĩ Năng 4"
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
