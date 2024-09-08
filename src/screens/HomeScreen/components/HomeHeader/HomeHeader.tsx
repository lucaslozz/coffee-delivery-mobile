import {AnimatedBox, Box} from '@components';
import {Favorites} from '../Favorites/Favorites';
import {Coffee} from '@domain';
import {useAppSafeArea} from '@hooks';
import {
  interpolate,
  runOnUI,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomInEasyUp,
} from 'react-native-reanimated';
import {Easing} from 'react-native';
import {useEffect} from 'react';

interface HomeHeaderProps {
  favoriteList?: Coffee[];
}

export function HomeHeader({favoriteList}: HomeHeaderProps) {
  const {top} = useAppSafeArea();
  const positionY = useSharedValue(-342);

  const positionStyle = useAnimatedStyle(() => ({
    top: positionY.value,
  }));

  useEffect(() => {
    positionY.value = withTiming(0, {
      duration: 500,
    });
  }, []);

  return (
    <Box>
      <AnimatedBox
        height={342}
        width="100%"
        style={[positionStyle, {marginBottom: -120, marginTop: -top}]}
        backgroundColor="GRAY_100"
      />
      <Favorites favoriteList={favoriteList ?? []} />
    </Box>
  );
}
