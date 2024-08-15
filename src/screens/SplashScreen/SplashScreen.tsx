import {AnimatedBox, Screen} from '@components';
import {useCircleAnimation} from './useCircleAnimation';
import {RocketCoffeeIcon} from '@brand';

export function SplashScreen() {
  const {rStyle} = useCircleAnimation();
  return (
    <Screen
      backgroundColor="PURPLE_DARK"
      alignItems="center"
      justifyContent="center"
      statusBarProps={{hidden: true}}>
      <AnimatedBox style={[rStyle]} backgroundColor="PURPLE" />
      <RocketCoffeeIcon size={44} color="white" />
    </Screen>
  );
}
