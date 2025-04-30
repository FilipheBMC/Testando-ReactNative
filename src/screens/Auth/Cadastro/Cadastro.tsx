import { View, Text } from 'react-native'
import React from 'react'

import Input from '../../../components/Input'

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ContentBody,
} from './styles';
import { useTheme } from 'styled-components';

export const Cadastro = () => {
  const { COLORS } = useTheme()


  return (
    <Container>
      <ContentHeader>
        <Title>Bem vindo(a) {'\n'} A Carteira Wallet</Title>
        <Description>Cadastro</Description>
      </ContentHeader>

      <ContentBody>
        <Input
          leftIcon
          placeholder='Digite seu nome'
          iconNameLeft='person'
          iconSize={23}
          iconColor={COLORS.GRAY}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='default'
        />

        <Input
          leftIcon
          placeholder='Digite seu E-mail'
          iconNameLeft='email'
          iconSize={23}
          iconColor={COLORS.GRAY}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
        />

        <Input
          leftIcon
          rightIcon
          placeholder='Digite sua senha'
          iconNameLeft='locked'
          iconSize={23}
          iconColor={COLORS.GRAY}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='default'
        />

      </ContentBody>

    </Container>
  )
};
