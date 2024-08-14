import React, {ComponentProps} from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();

type SRTextProps = ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
}

export function Text({
  preset = 'body',
  children,
  style,
  bold,
  semiBold,
  ...textProps
}: Readonly<TextProps>) {
  const fontFamily = getFontFamily(bold, semiBold);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], style, {fontFamily}]}
      {...textProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(bold?: boolean, semiBold?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    default:
      return $fontFamily.regular;
  }
}

export type TextVariants = 'heading' | 'subtitle' | 'body';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  heading: {fontSize: 22, lineHeight: 28.6},
  subtitle: {fontSize: 16, lineHeight: 20.8},
  body: {fontSize: 14, lineHeight: 18.2},
};

export const $fontFamily = {
  bold: 'Sarabun_700Bold',
  semiBold: 'Sarabun_600SemiBold',
  regular: 'Sarabun_400Regular',
};
