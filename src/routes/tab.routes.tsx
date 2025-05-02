import { View, Text, Settings } from 'react-native';
import React from 'react';


import theme from "../styles/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carteira } from "../screens/Tab/Carteira";
import { settings } from '../screens/Tab/settings';
import { Notificacao } from '@src/screens/Tab/Notificacao';
import { Relatorio } from '@src/screens/Tab/Relatorio';

export const TabRoutes = () => {

  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      initialRouteName='Carteira'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: theme.COLORS.GRAY4,
        tabBarActiveTintColor: theme.COLORS.BLACK,
        tabBarStyle: {
          padding: 7,
          backgroundColor: theme.COLORS.GRAY6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          // shadowOpacity: 0.2, 
        }
      }}
    >
      <Screen
        name="Carteira"
        component={Carteira}
      />

      <Screen
        name="Notificacao"
        component={Notificacao}
      />

      <Screen
        name="Relatorio"
        component={Relatorio}
      />

      <Screen
        name="settings"
        component={settings}
      />
      
    </Navigator>
  )
}
