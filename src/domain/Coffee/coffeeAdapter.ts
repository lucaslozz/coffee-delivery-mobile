import {currencyUtils} from '@utils';
import {Coffee, CoffeeApi} from './coffee.model';

function toCoffee(coffee: CoffeeApi): Coffee {
  const toTag: Record<CoffeeApi['category'], Coffee['category']> = {
    special: 'especial',
    sweet: 'doce',
    traditional: 'tradicional',
  };
  return {
    price: currencyUtils.formatCurrency(coffee.price ?? ''),
    category: coffee.category ? toTag[coffee.category] : 'tradicional',
    description: coffee.description,
    id: coffee.id,
    image: coffee.image,
    name: coffee.name,
  };
}

export const coffeeAdapter = {toCoffee};
