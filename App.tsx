import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importe esse componente
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes"

// Importando Login
import { Login } from './src/screens/Auth/Login/Login';

// Importando as fontes
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"

import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // fazendo verificaçãod as fontes
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // não mostra nada até carregar a fonte
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="dark" backgroundColor='translucent' />
          <View style={{ flex: 1 }}>
            <Routes />
            {/* <Login /> */}
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


