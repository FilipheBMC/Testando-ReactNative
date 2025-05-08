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
  Body,
  IconTransfer,
  IconPayment,
  IconTapOut,
  IconPayOut,
  TitleTransfer,
  TitlePayment,
  TitleTapOut,
  TitlePayOut,
  Footer,

  ContentFlat,
  ContentFlatHeader,
  Title,
  ButtonVerTodos,
  ButtonTitleVerTodos,
  IconTransaction,
  DetailsTransaction,
  NameTransaction,
  SubTitleTransaction,
  PriceTransaction,

} from "./styles";

// Importando as imagens

import Transfer from "../../../assets/convert.png";
import Payment from "../../../assets/export.png";
import Payout from "../../../assets/money-send.png";
import TopOut from "../../../assets/add-circle.png";

// Finalizado as importações das imagens par ao body

import { transaction } from '../../../Util/transaction';
import { Header } from "../../../components/Header/Header";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

export const Carteira = () => {
  return (
    <Container>
      <Header 
        appName={"Wallet"}
        iconAvatar
        textLef
      />
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


        <Body>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconTransfer source={Transfer} />
            <TitleTransfer>Transferência</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconPayment source={Payment} />
            <TitlePayment>Pagamentos</TitlePayment>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconTapOut source={TopOut} />
            <TitleTapOut>Mais Opções</TitleTapOut>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconPayOut source={Payout} />
            <TitlePayOut>Pagamento</TitlePayOut>
          </TouchableOpacity>
        </Body>

      </ViewContainer>

      <Footer>

        <FlatList
          data={transaction}
          renderItem={({ item }) => (
            <ContentFlat>

              <IconTransaction 
                source={item.icon}
              />
              <DetailsTransaction>

                <NameTransaction>{item.name}</NameTransaction>
                <SubTitleTransaction>{item.subtitle}</SubTitleTransaction>

              </DetailsTransaction>

              <PriceTransaction>${item.price}</PriceTransaction>

            </ContentFlat>
          )}
          ListHeaderComponent={
            <ContentFlatHeader>

              <Title>Minhas transaçõe</Title>

              <ButtonVerTodos>
                <ButtonTitleVerTodos>Ver todas</ButtonTitleVerTodos>
              </ButtonVerTodos>

            </ContentFlatHeader>
          }
          showsVerticalScrollIndicator={false}
        />

      </Footer>
    </Container>
  )
}
