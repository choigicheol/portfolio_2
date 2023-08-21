import React from "react";
import { Container, ContactBox, ImageDiv } from "./Contact.style";
import Bounce from "react-reveal/Bounce";

const contacts = [
  {
    path: "./images/mail.png",
    content: "gigichoi0916@gmail.com",
    href: "mailto:gigichoi0916@gmail.com",
  },
  {
    path: "./images/phone.png",
    content: "010-5720-0572",
    href: "tel:010-5720-0572",
  },
  {
    path: "./images/github.png",
    content: "github",
    href: "https://github.com/choigicheol",
  },
  {
    path: "./images/velog.svg",
    content: "blog",
    href: "https://velog.io/@g_c0916",
  },
];

const Contact = React.memo(function Contact() {
  return (
    <Container>
      {contacts.map((contact, idx) => (
        <ContactBox key={idx}>
          <Bounce>
            <a href={contact.href} target="_blank" rel="noreferrer noopener">
              <ImageDiv path={contact.path} />
            </a>
            <span>{contact.content}</span>
          </Bounce>
        </ContactBox>
      ))}
    </Container>
  );
});

export default Contact;
