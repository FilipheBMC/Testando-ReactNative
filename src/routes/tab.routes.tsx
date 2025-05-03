import { View, Text } from 'react-native';
import React from 'react';


import theme from "../styles/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carteira } from "../screens/Tab/Carteira";
import { Settings } from '../screens/Tab/Settings';
import { Notificacao } from '@src/screens/Tab/Notificacao';
import { Relatorio } from '@src/screens/Tab/Relatorio';

// Importando icones
import { CreditCard,
         Gear,
         Bell,
         ChartBar } from "phosphor-react-native";

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
          color: theme.COLORS.GRAY3,
          // shadowOpacity: 0.2, 
        }
      }}
    >
      <Screen
        name="Carteira"
        component={Carteira}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <CreditCard
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                  weight="fill"
                />
              ) : (
                <CreditCard
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                  weight="light"
                />
              )}


              {/* <CreditCard
                size={40}
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                weight="thin"
              /> */}
            </View>
          )
        }}
      />

      <Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarLabel: 'Notificação',
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Bell
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                  weight="fill"
                />
              ) : (
                <Bell
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                  weight="light"
                />
              )}


              {/* <CreditCard
                size={40}
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                weight="thin"
              /> */}
            </View>
          )
        }}
      />

      <Screen
        name="Relatorio"
        component={Relatorio}
        options={{
          tabBarLabel: 'Relatório',
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <ChartBar
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                  weight="fill"
                />
              ) : (
                <ChartBar
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                  weight="light"
                />
              )}


              {/* <CreditCard
                size={40}
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                weight="thin"
              /> */}
            </View>
          )
        }}
      />

      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Gear
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                  weight="fill"
                />
              ) : (
                <Gear
                  size={40}
                  color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                  weight="light"
                />
              )}


              {/* <CreditCard
                size={40}
                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY4}
                weight="thin"
              /> */}
            </View>
          )
        }}
      />

    </Navigator>
  )
}
