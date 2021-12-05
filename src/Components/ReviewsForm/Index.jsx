import React from "react";
import {
  Container,
  Head,
  HeadLeft,
  HeadLogo,
  HeadRight,
  HeadInfoName,
  HeadInfoAddress,
  HeadInfoLink,
  Descreption,
  Content,
  Body,
  HeadRightSectionOne,
  HeadRightSectionTwo,
} from "./styles";

function Index({ avatar, name, address, link, descreption }) {
  return (
    <Container>
      <Content>
        {/* HEAD */}
        <Head>
          {/* HeadLeft */}
          <HeadLeft>
            <HeadLogo src={avatar}></HeadLogo>
          </HeadLeft>

          {/* HeadRight */}
          <HeadRight>
            {/* HeadRightSectionOne */}
            <HeadRightSectionOne>
              <HeadInfoName>{name}</HeadInfoName>
              <HeadInfoAddress>{address}</HeadInfoAddress>
            </HeadRightSectionOne>

            {/* HeadRightSectionTwo */}
            <HeadRightSectionTwo>
              <HeadInfoLink target="_blank" href={link}>
                <i class="fab fa-instagram"></i>
              </HeadInfoLink>
            </HeadRightSectionTwo>
          </HeadRight>
        </Head>
        <hr />
        {/* BODY */}
        <Body>
          <Descreption>{descreption}</Descreption>
        </Body>
      </Content>
    </Container>
  );
}

export default Index;
