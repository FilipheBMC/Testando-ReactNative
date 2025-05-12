import { View, Text } from 'react-native';
import React from 'react';

import {
  Container,
  Title,
  DetailsCard,
  ViewDetails,
  Name,
  Banco,
  Conta,
  Status,
  Validade,
  ViewInfo,
  InfoTitle,

} from "./styles";

import { GoBack } from '@src/components/GoBack';
import ImageCard from "../../../assets/carddetails.png";
import { Button } from '../../../components/Button';

export const DetailCard = () => {
  return (
    <>
      <GoBack />
      <Container>
        <Title>Detalhes do Cartão</Title>
        <DetailsCard
          source={ImageCard}
        />

        <ViewDetails>
          <ViewInfo>
            <InfoTitle>Nome:</InfoTitle>
            <Name>Filipe Brandão</Name>
          </ViewInfo>
          <ViewInfo>
            <InfoTitle>Banco:</InfoTitle>
            <Banco>Bradesco</Banco>
          </ViewInfo>
          <ViewInfo>
            <InfoTitle>Conta:</InfoTitle>
            <Conta>1934</Conta>
          </ViewInfo>
          <ViewInfo>
            <InfoTitle>Status:</InfoTitle>
            <Status>Ativo</Status>
          </ViewInfo>
          <ViewInfo>
            <InfoTitle>Validade:</InfoTitle>
            <Validade>2022-2025</Validade>
          </ViewInfo>
        </ViewDetails>

        <Button
          variant='transparent'
          title='Deletar Cartão'
          onPress={() => { }}
          style={{
            marginTop: 100,
          }}
        />
      </Container>


    </>
  );
};
