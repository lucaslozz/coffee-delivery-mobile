import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface Props {
  index: number;
  cardSize: number;
  scrollPositionX: SharedValue<number>;
}

export function useScale({index, cardSize, scrollPositionX}: Props) {
  const cardsPosition = [
    (index - 1) * cardSize,
    cardSize * index,
    (index + 1) * cardSize,
  ];

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollPositionX.value,
            cardsPosition,
            [0.75, 1, 0.75],
          ),
        },
      ],
    };
  });

  return {scaleStyle};
}
