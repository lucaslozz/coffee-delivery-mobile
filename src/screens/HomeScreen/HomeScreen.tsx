import {Box, Screen, Text} from '@components';
import {Favorites} from './components';
import {coffeeStorageRepository, useCoffeeList} from '@domain';

export function HomeScreen() {
  const {coffeeList: favoriteList} = useCoffeeList({
    getList: coffeeStorageRepository.getList,
  });

  return (
    <Screen>
      <Favorites favoriteList={favoriteList ?? []} />
    </Screen>
  );
}
