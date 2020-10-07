import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#F0F0F5" />
      <AppProvider>
          <NavigationContainer>
              <Routes />
          </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>

  );
}
