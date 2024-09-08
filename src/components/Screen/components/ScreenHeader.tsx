import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ScreenProps} from '../Screen';
import {Box, BoxProps} from '~/components/Box/Box';
import {Icon} from '~/components/Icon/Icon';
import {Text} from '~/components/Text/Text';
import {TouchableOpacityBox} from '~/components/TouchableOpacityBox/TouchableOpacityBox';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'HeaderComponent'
> &
  BoxProps;

const ICON_SIZE = 20;
export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      mb={canGoBack || title ? 's24' : undefined}
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          testID="screen-back-button"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent && HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
