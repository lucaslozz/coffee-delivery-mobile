import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from '@routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
