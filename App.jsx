import {View,Text,image} from 'react-native';
import React from 'react';
import Home from './src/assets/image/pages/Home';
import Detail from './src/assets/image/pages/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
     <Stack.Navigator screenOption = {{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
