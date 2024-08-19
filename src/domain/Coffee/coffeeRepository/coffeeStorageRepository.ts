import {storage} from '@modules';
import {CoffeeRepository} from './coffeeRepositoryModel';
import {StorageKeys} from '@infra';
import {Coffee} from '../coffee.model';

async function getList(): Promise<Coffee[]> {
  return await storage.getItem<Coffee[]>(StorageKeys['@CoffeeList']);
}

export const coffeeStorageRepository: CoffeeRepository = {
  getList,
};
