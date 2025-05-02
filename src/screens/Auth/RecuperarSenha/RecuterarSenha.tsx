import { ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'

import  Input  from "../../../components/Input"
import { Button } from '../../../components/Button'

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ContentBody,
  ContentFooter,
  ButtonGoBack,
  Title1,
  Title2,

} from "./styles"
import { useNavigation } from '@react-navigation/native'


export const RecuperarSenha = () => {

  const navigation = useNavigation();
  const { COLORS } = useTheme();



  const handleReturn = () => {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <ContentHeader>
        <Title>Seja bem vindo {"\n"} a App Wallet</Title>
        <Description>Recuperar Senha</Description>
      </ContentHeader>

      <ContentBody>

        <Input
          leftIcon
          iconSize={25}
          iconNameLeft='email'
          iconColor={COLORS.BLACK}
          placeholder='Insira o seu e-mail'

        />

        <Button
          title='Enviar e-mail'
          onPress={() => {}}
          style={{
            marginTop: 40
          }}
          />


      </ContentBody>

      <ContentFooter>
        <ButtonGoBack onPress = {handleReturn} >
          <Title1>Não quer recuperar senha ?</Title1>
          <Title2>Voltar ao login</Title2>
        </ButtonGoBack>
      </ContentFooter>
    </Container>
  )
}

export default RecuperarSenha