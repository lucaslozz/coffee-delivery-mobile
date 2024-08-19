import {coffeeData} from '~/data';
import {CoffeeRepository} from './coffeeRepositoryModel';
import {Coffee} from '../coffee.model';

async function getList(): Promise<Coffee[]> {
  return new Promise<Coffee[]>(resolve =>
    setTimeout(() => resolve(coffeeData.coffeeList), 200),
  );
}

export const coffeeApiRepository: CoffeeRepository = {
  getList,
};
