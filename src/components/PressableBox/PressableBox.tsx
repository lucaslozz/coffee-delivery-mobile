import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import {Pressable, PressableProps, TouchableOpacity} from 'react-native';
import {Theme} from '~/theme';
import {RestyleTypes} from '../Box/Box';

export type PressableBoxProps = PressableProps & RestyleTypes;

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable,
);
