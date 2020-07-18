import React from "react";

import { Container, Details, Img, Title, Description } from "./styles";

import Img13 from "../../images/13.png";

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title> Cobre um amigo</Title>

        <Description>
          Matenha suas parcerias em dia, use o picpay para fazer suas cobranças
        </Description>
      </Details>
      <Img source={Img13} />
    </Container>
  );
}
