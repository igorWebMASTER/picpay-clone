import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  Container,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";

import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c10c"
          />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 15.284,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c10c" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
