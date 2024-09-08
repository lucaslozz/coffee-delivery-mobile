import {Coffee} from '@domain';
import {BoxProps, Tag, Text} from '@components';

import {Image} from 'react-native';

import {SharedValue} from 'react-native-reanimated';
import {ScaleBox} from './components/ScaleBox';

interface FavoriteCardProps {
  coffee: Coffee;
  cardIndex: number;
  cardSize: number;
  positionX: SharedValue<number>;
}

export function FavoriteCard({
  coffee,
  cardSize,
  positionX,
  cardIndex,
}: FavoriteCardProps) {
  return (
    <ScaleBox
      cardIndex={cardIndex}
      cardSize={cardSize}
      positionX={positionX}
      boxProps={$wrapper}>
      <Image
        source={coffee.image}
        style={{
          marginTop: -40,
          marginBottom: 12,
          width: 120,
          height: 120,
        }}
      />
      <Tag text={coffee?.category} preset="marked" />

      <Text
        textAlign="center"
        bold
        color="GRAY_200"
        preset="headingMedium"
        marginTop="s16">
        {coffee?.name}
      </Text>

      <Text
        textAlign="center"
        preset="paragraphExtraSmall"
        color="GRAY_400"
        marginBottom="s16">
        {coffee?.description}
      </Text>
      <Text textAlign="center" color="YELLOW_DARK" preset="headingLarge" bold>
        {coffee?.price}
      </Text>
    </ScaleBox>
  );
}

const $wrapper: BoxProps = {
  backgroundColor: 'GRAY_800',
  borderWidth: 1,
  borderColor: 'GRAY_700',
  alignItems: 'center',
  borderTopRightRadius: 's36',
  borderTopLeftRadius: 's6',
  borderBottomRightRadius: 's6',
  borderBottomLeftRadius: 's36',
  paddingHorizontal: 's16',
  paddingBottom: 's20',
  marginTop: 's40',
};
