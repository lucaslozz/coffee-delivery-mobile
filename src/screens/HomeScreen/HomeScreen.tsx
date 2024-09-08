import {ActivityIndicator, Box, Screen, Text} from '@components';
import {Favorites, HomeHeader} from './components';
import {Coffee, coffeeStorageRepository, useCoffeeList} from '@domain';
import Animated from 'react-native-reanimated';
import {ListRenderItemInfo, SectionList, SectionListData} from 'react-native';
import {FavoriteCard} from './components/Favorites/components';

export function HomeScreen() {
  const {coffeeList: favoriteList, isLoading} = useCoffeeList({
    getList: coffeeStorageRepository.getList,
  });

  const {coffeeList} = useCoffeeList({
    getList: coffeeStorageRepository.getList,
  });
  const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

  function renderItem({item, separators}: ListRenderItemInfo<Coffee>) {
    return (
      <Box>
        <Text>{item.name}</Text>
      </Box>
    );
  }

  function renderSectionHeader({section}: {section: SectionListData<Coffee>}) {
    return (
      <Box>
        <Text>{section.title}</Text>
      </Box>
    );
  }

  return (
    <AnimatedSectionList
      data={[{title: 'Coffee List', data: coffeeList}]}
      renderItem={renderItem}
      ListHeaderComponent={<HomeHeader favoriteList={favoriteList} />}
    />
  );
}
