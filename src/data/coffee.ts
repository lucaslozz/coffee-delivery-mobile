import {CoffeeApi} from '~/domain';

const coffeeList: CoffeeApi[] = [
  {
    id: 0,
    category: 'traditional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '990',
    image: require('../assets/images/expresso-tradicional.png'),
  },
  {
    id: 1,
    category: 'traditional',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '990',
    image: require('../assets/images/expresso-americano.png'),
  },
  {
    id: 2,
    category: 'traditional',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '990',
    image: require('../assets/images/expresso-cremoso.png'),
  },
  {
    id: 3,
    category: 'traditional',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: '990',
    image: require('../assets/images/latte.png'),
  },
  {
    id: 4,
    category: 'traditional',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '990',
    image: require('../assets/images/expresso-gelado.png'),
  },
  {
    id: 5,
    category: 'sweet',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    price: '990',
    image: require('../assets/images/capuccino.png'),
  },
  {
    id: 6,
    category: 'sweet',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '990',
    image: require('../assets/images/mocaccino.png'),
  },
  {
    id: 7,
    category: 'sweet',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '990',
    image: require('../assets/images/chocolate-quente.png'),
  },
  {
    id: 8,
    category: 'special',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '990',
    image: require('../assets/images/cubano.png'),
  },
  {
    id: 9,
    category: 'special',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '990',
    image: require('../assets/images/havaiano.png'),
  },
  {
    id: 10,
    category: 'special',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '990',
    image: require('../assets/images/arabe.png'),
  },
  {
    id: 11,
    category: 'special',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '990',
    image: require('../assets/images/irlandes.png'),
  },
];

export const coffeeData = {coffeeList};
