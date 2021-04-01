import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#9B51E0" barStyle="light-content" />
    <View style={{ backgroundColor: '#9B51E0', flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;