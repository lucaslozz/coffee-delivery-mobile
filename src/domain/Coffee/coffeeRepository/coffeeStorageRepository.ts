import {CoffeeRepository} from './coffeeRepositoryModel';

import {Coffee, CoffeeApi} from '../coffee.model';
import {coffeeData} from '~/data';
import {coffeeAdapter} from '../coffeeAdapter';

async function getList(): Promise<Coffee[]> {
  // return await storage.getItem<Coffee[]>(StorageKeys['@CoffeeList']);

  const response = await new Promise<CoffeeApi[]>(resolve =>
    setTimeout(() => resolve(coffeeData.coffeeList), 200),
  );

  return response.map(coffeeAdapter.toCoffee);
}

export const coffeeStorageRepository: CoffeeRepository = {
  getList,
};
