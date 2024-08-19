export type CoffeeCategory = 'traditional' | 'special' | 'sweet';

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: string;
  category: CoffeeCategory;
  image: string;
}
