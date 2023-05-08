import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../style/global.style";
import Bounce from "react-reveal/Bounce";

const Container = styled(FlexBox)`
  height: 200px;
  justify-content: center;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  padding: 0 80px;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
  }
`;

const ContactBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  margin: 20px;
  span {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.path})`};
  background-position: top;
  background-size: cover;
  box-sizing: border-box;
  cursor: pointer;
`;

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

function Contact() {
  return (
    <Container>
      {contacts.map((contact, idx) => (
        <ContactBox key={idx}>
          <Bounce>
            <a href={contact.href} target="_blank">
              <ImageDiv path={contact.path} />
            </a>
            <span>{contact.content}</span>
          </Bounce>
        </ContactBox>
      ))}
    </Container>
  );
}

export default Contact;
