import {createRestyleFunction} from '@shopify/restyle';
import {scaleUtils} from '~/utils';

const moderateTop = createRestyleFunction({
  property: 'top',
  styleProperty: 'top',
  transform: ({value}) => scaleUtils.vertical(value),
});

const moderateBottom = createRestyleFunction({
  property: 'bottom',
  styleProperty: 'bottom',
  transform: ({value}) => scaleUtils.vertical(value),
});

const moderateLeft = createRestyleFunction({
  property: 'left',
  styleProperty: 'left',
  transform: ({value}) => scaleUtils.horizontal(value),
});

const moderateRight = createRestyleFunction({
  property: 'right',
  styleProperty: 'right',
  transform: ({value}) => scaleUtils.horizontal(value),
});

const moderateStart = createRestyleFunction({
  property: 'start',
  styleProperty: 'start',
  transform: ({value}) => scaleUtils.moderate(value),
});

const moderateEnd = createRestyleFunction({
  property: 'end',
  styleProperty: 'end',
  transform: ({value}) => scaleUtils.moderate(value),
});

export const moderatePosition = [
  moderateTop,
  moderateBottom,
  moderateLeft,
  moderateRight,
  moderateStart,
  moderateEnd,
];
