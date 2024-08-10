import { ViewStyle } from "react-native";

import { createTheme } from "@shopify/restyle";

export const palette = {
  WHITE: "#FFFFFF",

  YELLOW: "#DBAC2C",
  YELLOW_DARK: "#C47F17",

  PURPLE: "#8047F8",
  PURPLE_LIGHT: "#EBE5F9",
  PURPLE_DARK: "#4B2995",

  RED: "#E8BAAB",
  RED_DARK: "#C44117",
  RED_LIGHT: "#F2DFD8",

  GRAY_100: "#272221",
  GRAY_200: "#403937",
  GRAY_300: "#574F4D",
  GRAY_400: "#8D8686",
  GRAY_500: "#D7D5D5",
  GRAY_600: "#E6E5E5",
  GRAY_700: "#EDEDED",
  GRAY_800: "#F3F2F2",
  GRAY_900: "#FAFAFA",
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.PURPLE_DARK,
    secondary: palette.YELLOW_DARK,

    background: palette.WHITE,
    backgroundContrast: palette.GRAY_100,

    error: palette.RED,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
  },

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};
export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
