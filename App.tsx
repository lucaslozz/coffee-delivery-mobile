import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';
import {initializeStorage} from './src/modules/storage/storage';
import {MMKVStorage} from '~/modules/storage';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '~/infra';

initializeStorage(MMKVStorage);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
