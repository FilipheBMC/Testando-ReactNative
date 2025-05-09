import React from 'react'
import {
  Container,
  ViewProfileName,
  PorfileName,
  ViewRight,
  ViewIcon,

} from "./styles";

import { Header } from '../../..//components/Header';
import { User, CaretRight } from "phosphor-react-native";
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Setings } from "../../../components/Settings";

export const Settings = () => {

  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const handleGoPerfil = () => {
    // navigation.navigate("");
    console.log("Clicou aqui");
  }

  return (
    <>
      <Header
        appName={"Configuração"}
      />
      <Container>

        <Setings
          name={"Filipe Brandão"}
          iconLeft
          typeUser
        />

        <Setings
          name={"Notificação"}
          iconLeft
          typeNotification
        />

        <Setings
          name={"Sua Carteira"}
          iconLeft
          typeWalet
        />

        <Setings
          name={"Configurações de login"}
          iconLeft
          typeLogin
        />

        <Setings
          name={"Serviço de atendimento"}
          iconLeft
          typeCall
        />

      </Container>
    </>
  )
};