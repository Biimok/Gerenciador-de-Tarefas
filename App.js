import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme, DarkTheme } from './src/components/Theme/Theme';
import AppProvider from './src/hooks';
import Routes from './src/routes';


export default function App() {
  
  return (
    <SafeAreaProvider>
      <StatusBar style="dark"/>
      <AppProvider>
          <ThemeProvider theme={DefaultTheme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
          </ThemeProvider>
      </AppProvider>
    </SafeAreaProvider>

  );
}


// cor primária 1 = #419fe3
// cor primária 2 = #7cd0ff
// cor primária 3 = #0071b0
// cor do Texto = #000

//  cor secundária 1 = #745be2
//  cor secundária 2 = #a989ff
//  cor secundária 3 = #3c30af
// cor do Texto = #fff