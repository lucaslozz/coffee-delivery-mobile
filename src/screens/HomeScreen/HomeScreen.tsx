import {ActivityIndicator, Box, Screen, Text} from '@components';
import {Favorites} from './components';
import {coffeeStorageRepository, useCoffeeList} from '@domain';

export function HomeScreen() {
  const {coffeeList: favoriteList, isLoading} = useCoffeeList({
    getList: coffeeStorageRepository.getList,
  });

  return (
    <Screen noPaddingHorizontal>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Favorites favoriteList={favoriteList ?? []} />
      )}
    </Screen>
  );
}
