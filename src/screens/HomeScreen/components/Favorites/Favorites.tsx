import {Box, FavoriteCard} from '@components';
import {Coffee} from '@domain';
import {useEffect, useState} from 'react';
import {Dimensions, FlatList, ListRenderItemInfo} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

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
    <Box>
      <Animated.FlatList
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
    </Box>
  );
}
