import {
  createBox,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '../../theme/theme';

import Animated from 'react-native-reanimated';

export type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export type BoxProps = React.ComponentProps<typeof Box>;

export const Box = createBox<Theme>();

export const AnimatedBox = Animated.createAnimatedComponent(Box);
