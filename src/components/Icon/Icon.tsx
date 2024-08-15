import {Pressable} from 'react-native';
import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';
import {ArrowLeftIcon, ShopCartIcon} from '@assets';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={16} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  shopCart: ShopCartIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
