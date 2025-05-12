import React from 'react';
import { HomeScreen } from '../screens/home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen } from '../screens/animations/Animation101Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
    </Stack.Navigator>
  );
};
