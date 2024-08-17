import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, HomeScreen} from '@screens';

export type AppStackParamList = {
  
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
     
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
