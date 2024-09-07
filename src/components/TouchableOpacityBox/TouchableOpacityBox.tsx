import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import {Theme} from '../../theme/theme';
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {RestyleTypes} from '../Box/Box';

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
