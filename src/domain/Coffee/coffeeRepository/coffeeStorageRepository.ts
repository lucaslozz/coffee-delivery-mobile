import {CoffeeRepository} from './coffeeRepositoryModel';

import {Coffee} from '../coffee.model';
import {coffeeData} from '~/data';

async function getList(): Promise<Coffee[]> {
  // return await storage.getItem<Coffee[]>(StorageKeys['@CoffeeList']);

  return new Promise<Coffee[]>(resolve =>
    setTimeout(() => resolve(coffeeData.coffeeList.slice(0, 5)), 200),
  );
}

export const coffeeStorageRepository: CoffeeRepository = {
  getList,
};
