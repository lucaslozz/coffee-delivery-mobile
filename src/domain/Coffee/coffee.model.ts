import {ImageSourcePropType} from 'react-native';

export type CoffeeCategoryApi = 'traditional' | 'special' | 'sweet';

export type CoffeeCategory = 'tradicional' | 'especial' | 'doce';
export interface CoffeeApi {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  category?: CoffeeCategoryApi;
  image?: ImageSourcePropType;
}

export interface Coffee {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  category?: CoffeeCategory;
  image?: ImageSourcePropType;
}
