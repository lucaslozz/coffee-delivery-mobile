import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {initializeStorage} from './src/modules/storage/storage';
import {MMKVStorage} from '~/modules/storage';

initializeStorage(MMKVStorage);

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
