import {View,Text,image} from 'react-native';
import React from 'react';
import Home from './src/assets/image/pages/Home';
import Detail from './src/assets/image/pages/Detail';
import Sukses from './src/assets/image/pages/Sukses';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
     <Stack.Navigator screenOption = {{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen name="Sukses" component={Sukses} />
  </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
