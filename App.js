import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './src/screens/Tela1/Tela1';
import Tela2 from './src/screens/Tela2/Tela2';
import Tela3 from './src/screens/Tela3/Tela3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
