import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'

import Input from '../../../components/Input'
import { Button } from '../../../components/Button';

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ContentBody,
  ContentFooter,
  ButtonFooter,
  Title1,
  Title2,
} from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export const Cadastro = () => {
  const Navigation = useNavigation();

  const { COLORS } = useTheme()

  const handleLogin = () => {
    Navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <Container>
        {/* Esse scrollView vai fazer com que quando estamos colocando alguma coisa e queremos movimentar para cima ou para baixo a tela, não apareça uma barra na lateral indicando a posição, como acontece na web */}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
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

            <Button
              title="Cadastrar"
              onPress={() => { }}
              style={{
                marginTop: 50,
              }}
            />
          </ContentBody>

          <ContentFooter>
            <ButtonFooter onPress={handleLogin}>
              <Title1>Já tem conta ?</Title1>
              <Title2>Logar-se</Title2>
            </ButtonFooter>
          </ContentFooter>

        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  )
};
