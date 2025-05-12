import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Profile } from "../screens/App/Profile";
import { TabRoutes } from './tab.routes';
import { AddCartao } from '../screens/App/AddCartao';
import { DetailCard } from '../screens/App/DetailCard';
import { Transaction } from '../screens/App/Transaction';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName='TabRoutes'
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen
        name='TabRoutes'
        component={TabRoutes}
      />

      <Screen
        name='Profile'
        component={Profile}
      />

      <Screen
        name='AddCartao'
        component={AddCartao}
      />

      <Screen 
        name="DetailCard"
        component={DetailCard}
      />

      <Screen 
        name="Transaction"
        component={Transaction}
      />

    </Navigator>
  )
}
