import React from "react";
import { Container, ContactList, ContactListItem } from "./styles";

function Index() {
  return (
    <Container>
      <ContactList>
        {/* ITEM */}
        <ContactListItem
          target="_blank"
          href="https://www.facebook.com/tonducthanguniversity"
        >
          <i class="fab fa-facebook-square"></i>
        </ContactListItem>
        {/* ITEM */}
        <ContactListItem
          target="_blank"
          href="https://www.instagram.com/tdtu.edu.vn/"
        >
          <i class="fab fa-instagram"></i>
        </ContactListItem>
        {/* ITEM */}
        <ContactListItem
          target="_blank"
          href="https://twitter.com/tonducthanguniv"
        >
          <i class="fab fa-twitter"></i>
        </ContactListItem>
        {/* ITEM */}
        <ContactListItem
          target="_blank"
          href="https://www.linkedin.com/school/ton-duc-thang-university/"
        >
          <i class="fab fa-linkedin-in"></i>
        </ContactListItem>
      </ContactList>
    </Container>
  );
}

export default Index;
