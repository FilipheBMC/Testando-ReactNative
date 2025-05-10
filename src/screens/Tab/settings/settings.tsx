import React from 'react'
import {
  Container,
  ViewFooter,
  TitleFooter,
  ViewIconButton,
} from "./styles";

import { Header } from '../../..//components/Header';
import { SignOut, } from "phosphor-react-native";
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Setings } from "../../../components/Settings";

export const Settings = () => {

  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const handleGoPerfil = () => {
    navigation.navigate("Profile");
  }

  return (
    <>
      <Header
        appName={"Configuração"}
      />
      <Container>

        <Setings
          name={"Perfil"}
          iconLeft
          typeUser
          onPress= {handleGoPerfil}
        />

        <Setings
          name={"Notificação"}
          iconLeft
          typeNotification
          onPress= {() => {}}
        />

        <Setings
          name={"Sua Carteira"}
          iconLeft
          typeWalet
          onPress= {() => {}}
        />

        <Setings
          name={"Configurações de login"}
          iconLeft
          typeLogin
          onPress= {() => {}}
        />

        <Setings
          name={"Serviço de atendimento"}
          iconLeft
          typeCall
          onPress= {() => {}}
        />

        <ViewFooter>
          <TouchableOpacity>
            <ViewIconButton>
              <SignOut
                size={32}
                weight="light"
                color={COLORS.PURPLE}
              />
            </ViewIconButton>
          </TouchableOpacity>
          <TitleFooter>Sair da Wallet</TitleFooter>
        </ViewFooter>

      </Container>
    </>
  )
};