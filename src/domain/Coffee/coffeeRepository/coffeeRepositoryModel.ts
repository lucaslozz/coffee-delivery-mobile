import {Coffee} from '../coffee.model';

export interface CoffeeRepository {
  getList(): Promise<Coffee[]>;
}
