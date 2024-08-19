import {Coffee} from '@model';

export interface CoffeeRepository {
  getList(): Promise<Coffee[]>;
}
