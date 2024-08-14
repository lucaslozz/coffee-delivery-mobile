import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {SplashScreen} from '@screens';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}
