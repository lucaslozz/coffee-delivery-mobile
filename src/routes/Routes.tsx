import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {SplashScreen} from '@screens';
import RNBootSplash from 'react-native-bootsplash';

export function Router() {
  const [initApp, setInitApp] = useState(false);

  const runSplashScreen = () => {
    RNBootSplash.hide({fade: true}).finally(() => {
      setTimeout(() => setInitApp(true), 1000);
    });
  };

  return (
    <NavigationContainer onReady={runSplashScreen}>
      {initApp ? <AppStack /> : <SplashScreen />}
    </NavigationContainer>
  );
}
