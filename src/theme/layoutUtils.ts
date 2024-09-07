import {createRestyleFunction, layout} from '@shopify/restyle';
import {scaleUtils} from '~/utils';

const width = createRestyleFunction({
  property: 'width',
  styleProperty: 'width',
  transform: ({value}: {value: number}) => scaleUtils.horizontal(value),
});

const minWidth = createRestyleFunction({
  property: 'minWidth',
  styleProperty: 'minWidth',
  transform: ({value}: {value: number}) => scaleUtils.horizontal(value),
});

const maxWidth = createRestyleFunction({
  property: 'maxWidth',
  styleProperty: 'maxWidth',
  transform: ({value}: {value: number}) => scaleUtils.horizontal(value),
});

const height = createRestyleFunction({
  property: 'height',
  styleProperty: 'height',
  transform: ({value}: {value: number}) => scaleUtils.vertical(value),
});

const minHeight = createRestyleFunction({
  property: 'minHeight',
  styleProperty: 'minHeight',
  transform: ({value}: {value: number}) => scaleUtils.vertical(value),
});

const maxHeight = createRestyleFunction({
  property: 'maxHeight',
  styleProperty: 'maxHeight',
  transform: ({value}: {value: number}) => scaleUtils.vertical(value),
});

export const moderateLayout = [
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  ...layout,
];
