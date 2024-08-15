import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
  ViewStyle,
} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer, ScreenHeader} from './components';
import {Box, BoxProps} from '~/components/Box/Box';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  noPaddingHorizontal?: boolean;
  statusBarProps?: StatusBarProps;
}

export function Screen({
  children,
  HeaderComponent,
  canGoBack = false,
  scrollable = false,
  noPaddingHorizontal = false,
  title,
  style,
  statusBarProps,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={[wrapper]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <StatusBar
          {...statusBarProps}
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          flex={1}
          {...boxProps}>
          <ScreenHeader
            canGoBack={canGoBack}
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            title={title}
            HeaderComponent={HeaderComponent}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const wrapper: ViewStyle = {flex: 1};
