import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '@screens';

export type AppStackParamList = {
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
}
