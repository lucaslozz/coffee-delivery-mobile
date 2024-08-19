import {currencyUtils} from '@utils';
import {Coffee} from './coffee.model';

function toCoffee(coffee: Coffee): Coffee {
  return {
    price: currencyUtils.formatCurrency(coffee.price),
    category: coffee.category,
    description: coffee.description,
    id: coffee.id,
    image: coffee.image,
    name: coffee.name,
  };
}

export const coffeeAdapter = {toCoffee};
