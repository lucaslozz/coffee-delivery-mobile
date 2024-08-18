import {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const circleDiameter = Math.sqrt(screenWidth ** 2 + screenHeight ** 2) * 1.5;

export const useSplashScreenAnimation = () => {
  const scale = useSharedValue(0);

  const logoPositionX = useSharedValue(80);
  const logoOpacity = useSharedValue(0);
  const rocketLogoPositionX = useSharedValue(55);

  function scaleCircleAnimation() {
    scale.value = withTiming(1, {duration: 800}, () => {
      logoPositionX.value = withTiming(0, {duration: 600});

      logoOpacity.value = withTiming(1, {duration: 800});

      rocketLogoPositionX.value = withTiming(0, {duration: 500});
    });
  }

  const rStyle = useAnimatedStyle(() => {
    return {
      width: circleDiameter,
      height: circleDiameter,
      borderRadius: circleDiameter,
      transform: [{scale: scale.value}],
    };
  });

  const positionLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: logoPositionX.value}],
      opacity: logoOpacity.value,
    };
  });

  const positionRocketLogoStyle = useAnimatedStyle(() => ({
    transform: [{translateX: rocketLogoPositionX.value}],
  }));

  useEffect(() => {
    scaleCircleAnimation();
  }, []);

  return {rStyle, positionLogoStyle, positionRocketLogoStyle};
};
