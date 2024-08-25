import {SharedValue} from 'react-native-reanimated';
import {AnimatedBox, Box, BoxProps} from '~/components/Box/Box';
import {useScale} from '../animations/useScale';
import {StyleProp, ViewStyle} from 'react-native';

interface ScaleBoxProps {
  children: React.ReactNode;
  positionX: SharedValue<number>;
  cardIndex: number;
  cardSize: number;
  boxProps: BoxProps;
}

export function ScaleBox({
  children,
  cardIndex,
  cardSize,
  positionX,
  boxProps,
}: ScaleBoxProps) {
  const {scaleStyle} = useScale({
    index: cardIndex,
    cardSize,
    scrollPositionX: positionX,
  });

  return (
    <AnimatedBox style={[scaleStyle]} width={cardSize} {...boxProps}>
      {children}
    </AnimatedBox>
  );
}
