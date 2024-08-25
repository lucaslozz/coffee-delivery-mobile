import React, {ComponentProps} from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();

type SRTextProps = ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  normalBold?: boolean;
}

export function Text({
  preset = 'paragraphMedium',
  children,
  style,
  bold,
  normalBold,
  ...textProps
}: Readonly<TextProps>) {
  const fontFamily = getFontFamily(bold, normalBold);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], style, {fontFamily}]}
      {...textProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(bold?: boolean, normalBold?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case normalBold:
      return $fontFamily.normalBold;
    default:
      return $fontFamily.regular;
  }
}

export type TextVariants =
  | 'headingExtraLarge'
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'headingExtraSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphExtraSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingExtraLarge: {fontSize: 36, lineHeight: 46.8},
  headingLarge: {fontSize: 24, lineHeight: 31.2},
  headingMedium: {fontSize: 20, lineHeight: 26},
  headingSmall: {fontSize: 16, lineHeight: 20.8},
  headingExtraSmall: {fontSize: 14, lineHeight: 18.2},
  paragraphLarge: {fontSize: 20, lineHeight: 18.2},
  paragraphMedium: {fontSize: 16, lineHeight: 20.8},
  paragraphSmall: {fontSize: 14, lineHeight: 18.2},
  paragraphExtraSmall: {fontSize: 12, lineHeight: 15.6},
};

export const $fontFamily = {
  bold: 'Baloo2-Bold',
  normalBold: 'Roboto-Bold',
  regular: 'Roboto-Regular',
};
