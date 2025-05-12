import React from 'react'
import {
  Container,
  Title,
  BalanceImage,
  AmountValue,
  ViewContent,
  TitleAmount,
  AmountValorTotal,
  Footer,
  ContentFlat,
  IconTransaction,
  DetailsTransaction,
  NameTransaction,
  SubTitleTransaction,
  PriceTransaction,
  ButtonTitleVerTodos,
  ButtonVerTodos,
  ContentFlatHeader,

} from "./styles";

import { transaction } from '../../../Util/transaction';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from "../../../components/Header";
import BalancePng from '../../../assets/estatistica.png';

export const Relatorio = () => {
  return (
    <>
      <Header
        appName={"Relatório"}
        iconeLeft
        typeRelatorio
      />
      <Container>
        <BalanceImage
          source={BalancePng}
          resizeMode="contain"
        >
          <AmountValue>R$:500</AmountValue>
        </BalanceImage>

        <ViewContent>
          <TitleAmount>Valor total</TitleAmount>
          <AmountValorTotal>R$:10.000</AmountValorTotal>
        </ViewContent>

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
                  <ButtonTitleVerTodos>Mais Recentes</ButtonTitleVerTodos>
                </ButtonVerTodos>

              </ContentFlatHeader>
            }
            showsVerticalScrollIndicator={false}
          />

        </Footer>

      </Container>
    </>
  )
};