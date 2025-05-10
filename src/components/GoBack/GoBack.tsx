import { View, Text } from 'react-native';
import React from 'react';
import { CaretCircleLeft } from "phosphor-react-native";
import { useTheme } from 'styled-components';

import { Container } from "./styled";
import { useNavigation } from '@react-navigation/native';

export const GoBack = () => {

    const { COLORS } = useTheme();
    const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <CaretCircleLeft
        size={40}
        weight={'regular'}
        color={COLORS.PURPLEDARK1}
        />
    </Container>
  )
}
