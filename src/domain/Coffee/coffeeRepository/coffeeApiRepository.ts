import {coffeeData} from '~/data';
import {CoffeeRepository} from './coffeeRepositoryModel';
import {Coffee, CoffeeApi} from '../coffee.model';
import {coffeeAdapter} from '../coffeeAdapter';

async function getList(): Promise<Coffee[]> {
  const response = await new Promise<CoffeeApi[]>(resolve =>
    setTimeout(() => resolve(coffeeData.coffeeList), 200),
  );

  return response.map(coffeeAdapter.toCoffee);
}

export const coffeeApiRepository: CoffeeRepository = {
  getList,
};
