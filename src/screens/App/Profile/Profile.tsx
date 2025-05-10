import { View, Text } from 'react-native';
import React from 'react';

import {
  Container,
  Header,
  Content,
  Footer,
  Avatar,
  ViewHeader,
  HeaderName,
  IconButton,
  ViewFooter,
  TitleFooter,
  ViewIconButton,

} from "./styles";

import { TouchableOpacity } from 'react-native';
import { Setings } from '../../../components/Settings';
import { useTheme } from 'styled-components';
import { GoBack } from "../../../components/GoBack";
import { Pen, Trash } from "phosphor-react-native";

export const Profile = () => {

  const { COLORS } = useTheme();

  return (
    <>
      <GoBack />

      <Container>
        <Header>
          <Avatar
            source={{
              uri: 'https://github.com/silvaneimartins.png'
            }}
          />
          <ViewHeader>
            <HeaderName>Cara aleatório</HeaderName>
            <IconButton>
              <Pen
                size={25}
                weight={'light'}
                color={COLORS.GRAY2}
              />
            </IconButton>
          </ViewHeader>
        </Header>
        <Content>

          <Setings
            name={'Conta conectada'}
            onPress={() => { }}
          />

          <Setings
            name={'Privacidade e segurança'}
            onPress={() => { }}
          />

          <Setings
            name={'Configuração de login'}
            onPress={() => { }}
          />

          <Setings
            name={'Centro de login'}
            onPress={() => { }}
          />
        </Content>
        <Footer>
          <ViewFooter>
            <TouchableOpacity>
              <ViewIconButton>
                <Trash
                  size={32}
                  weight="light"
                  color={COLORS.PURPLE}
                />
              </ViewIconButton>
            </TouchableOpacity>
            <TitleFooter>Sair da Wallet</TitleFooter>
          </ViewFooter>
        </Footer>
      </Container>
    </>
  )
}
