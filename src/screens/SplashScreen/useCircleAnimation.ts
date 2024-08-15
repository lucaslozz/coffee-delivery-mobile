import {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const circleDiameter = Math.sqrt(screenWidth ** 2 + screenHeight ** 2);

export const useCircleAnimation = () => {
  const scale = useSharedValue(0);

  function scaleCircleAnimation() {
    scale.value = withTiming(1, {duration: 800});
  }

  const rStyle = useAnimatedStyle(() => {
    return {
      width: circleDiameter,
      height: circleDiameter,
      borderRadius: circleDiameter,
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    scaleCircleAnimation();
  }, []);

  return {rStyle};
};
