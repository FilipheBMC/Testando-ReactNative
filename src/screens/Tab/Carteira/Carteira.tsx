import React from 'react'
import {
  Container,
  Content,
  ViewContainer,
  ViewBalanceLeft,
  ViewBalanceRight,
  TitleValue,
  TitleValorConta,
  TitleCartao,
  TitleNomeCartao,

} from "./styles";

import { Header } from "../../../components/Header/Header";
import { View, Text } from "react-native";

export const Carteira = () => {
  return (
    <Container>
      <Header />
      <ViewContainer>
        <Content>

          <ViewBalanceLeft>
            <TitleValue>Valor total:</TitleValue>
            <TitleValorConta>R$: 10.000,00</TitleValorConta>
          </ViewBalanceLeft>

          <ViewBalanceRight>
            <TitleCartao>Cartão</TitleCartao>
            <TitleNomeCartao>Wallet</TitleNomeCartao>
          </ViewBalanceRight>

        </Content>
      </ViewContainer>
    </Container>
  )
}
