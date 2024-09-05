import {AnimatedBox, Box, FavoriteCard} from '@components';
import {Coffee} from '@domain';

import {Dimensions, ListRenderItemInfo} from 'react-native';
import Animated, {
  SlideInRight,
  useAnimatedScrollHandler,
  useSharedValue,
  ZoomInRight,
} from 'react-native-reanimated';
import {scaleUtils} from '~/utils';

interface FavoritesProps {
  favoriteList: Coffee[];
}

const CARD_SIZE = 208;
const FAVORITE_LIST_PADDING = (Dimensions.get('window').width - CARD_SIZE) / 2;

export function Favorites({favoriteList}: FavoritesProps) {
  const positionX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(event => {
    positionX.value = event.contentOffset.x;
  }, []);

  function renderItem({item, index}: ListRenderItemInfo<Coffee>) {
    return (
      <FavoriteCard
        coffee={item}
        cardSize={CARD_SIZE}
        positionX={positionX}
        cardIndex={index}
      />
    );
  }

  return (
    <AnimatedBox entering={ZoomInRight.duration(500)}>
      <Animated.FlatList
        entering={SlideInRight.duration(600)}
        keyExtractor={item => item?.id?.toString() ?? ''}
        contentContainerStyle={{
          paddingHorizontal: FAVORITE_LIST_PADDING,
        }}
        data={favoriteList ?? []}
        renderItem={renderItem}
        snapToInterval={CARD_SIZE}
        onScroll={onScroll}
        bounces={false}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </AnimatedBox>
  );
}
