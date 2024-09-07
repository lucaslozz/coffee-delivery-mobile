import {border, createRestyleFunction} from '@shopify/restyle';
import {scaleUtils} from '~/utils';

const borderRadius = createRestyleFunction({
  property: 'borderRadius',
  styleProperty: 'borderRadius',
  transform: ({value}) => scaleUtils.moderate(value),
});

const borderBottomLeftRadius = createRestyleFunction({
  property: 'borderBottomLeftRadius',
  styleProperty: 'borderBottomLeftRadius',
  transform: ({value}) => scaleUtils.moderate(value),
});

const borderBottomRightRadius = createRestyleFunction({
  property: 'borderBottomRightRadius',
  styleProperty: 'borderBottomRightRadius',
  transform: ({value}) => scaleUtils.moderate(value),
});

const borderTopLeftRadius = createRestyleFunction({
  property: 'borderTopLeftRadius',
  styleProperty: 'borderTopLeftRadius',
  transform: ({value}) => scaleUtils.moderate(value),
});

const borderTopRightRadius = createRestyleFunction({
  property: 'borderTopRightRadius',
  styleProperty: 'borderTopRightRadius',
  transform: ({value}) => scaleUtils.moderate(value),
});

export const moderateBorder = [
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  ...border,
];
