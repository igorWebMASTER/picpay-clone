import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Title,
  Header,
  Card,
  CardHeader,
  Description,
  Bold,
  Avatar,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <>
      <Container>
        <Header>
          <Title>Atividades</Title>
        </Header>

        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold>Voce</Bold> pagou a <Bold>@nubank</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <UserName> Igor Ribeiro</UserName>
          </CardBody>

          <CardFooter>
            <Details>
              <Value>R$ 169,90</Value>

              <Divider />
              <Feather name="lock" color="#fff" />
              <Date> há 2 dias</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#fff"
                />
                <OptionLabel>0</OptionLabel>
              </Option>

              <Option>
                <AntDesign name="hearto" size={14} color="#fff" />
                <OptionLabel>0</OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
