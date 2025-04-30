import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Conectando as screems que foram criadas dentro de Auth
import { Login } from "../screens/Auth/Login/Login";
import { RecuperarSenha } from '../screens/Auth/RecuperarSenha';
import { Cadastro } from '../screens/Auth/Cadastro';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false,
        }}
    >
      <Screen name = 'Login' component= {Login}/>
      <Screen name = "RecuperarSenha" component = {RecuperarSenha} options={{headerShown: true}}/>
      <Screen name = 'Cadastro' component={ Cadastro } options={{headerShown: true}} />
    </Navigator>
  )
}

