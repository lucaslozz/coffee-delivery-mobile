import {AnimatedBox, Screen} from '@components';
import {useSplashScreenAnimation} from './useSplashScreenAnimation';
import {LogoIcon, RocketCoffeeIcon} from '@brand';

export function SplashScreen() {
  const {rStyle, positionLogoStyle, positionRocketLogoStyle} =
    useSplashScreenAnimation();

  return (
    <Screen
      backgroundColor="PURPLE_DARK"
      alignItems="center"
      justifyContent="center">
      <AnimatedBox style={[rStyle]} backgroundColor="PURPLE" />

      <AnimatedBox position="absolute" flexDirection="row" gap="s14">
        <AnimatedBox style={positionRocketLogoStyle}>
          <RocketCoffeeIcon />
        </AnimatedBox>

        <AnimatedBox style={positionLogoStyle}>
          <LogoIcon />
        </AnimatedBox>
      </AnimatedBox>
    </Screen>
  );
}
