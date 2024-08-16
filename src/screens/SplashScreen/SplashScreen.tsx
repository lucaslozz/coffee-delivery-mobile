import {AnimatedBox, Screen} from '@components';
import {useCircleAnimation} from './useCircleAnimation';
import {LogoIcon, RocketCoffeeIcon} from '@brand';

export function SplashScreen() {
  const {rStyle} = useCircleAnimation();

  return (
    <Screen
      backgroundColor="PURPLE_DARK"
      alignItems="center"
      justifyContent="center"
      statusBarProps={{hidden: true}}>
      <AnimatedBox style={[rStyle]} backgroundColor="PURPLE" />

      <AnimatedBox position="absolute" flexDirection="row" gap="s14">
        <RocketCoffeeIcon />

        <AnimatedBox>
          <LogoIcon />
        </AnimatedBox>
      </AnimatedBox>
    </Screen>
  );
}
