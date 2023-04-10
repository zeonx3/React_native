import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

export type RootStackBavigator = {
    HomeScreen: undefined,
    DetailScreen: undefined
}

const Stack = createStackNavigator<RootStackBavigator>();

export const StackNavigator= () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen}/>
    </Stack.Navigator>
  );
}