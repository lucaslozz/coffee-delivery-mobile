import {BaseTheme, createRestyleFunction, SpacingProps} from '@shopify/restyle';
import {scaleUtils} from '~/utils';

const moderateMarginTop = createRestyleFunction({
  property: 'marginTop',
  styleProperty: 'marginTop',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderateMarginBottom = createRestyleFunction({
  property: 'marginBottom',
  styleProperty: 'marginBottom',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderateMarginVertical = createRestyleFunction({
  property: 'marginVertical',
  styleProperty: 'marginVertical',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderateMarginHorizontal = createRestyleFunction({
  property: 'marginHorizontal',
  styleProperty: 'marginHorizontal',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderateMarginLeft = createRestyleFunction({
  property: 'marginLeft',
  styleProperty: 'marginLeft',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderateMarginRight = createRestyleFunction({
  property: 'marginRight',
  styleProperty: 'marginRight',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderatePaddingTop = createRestyleFunction({
  property: 'paddingTop',
  styleProperty: 'paddingTop',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderatePaddingBottom = createRestyleFunction({
  property: 'paddingBottom',
  styleProperty: 'paddingBottom',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderatePaddingVertical = createRestyleFunction({
  property: 'paddingVertical',
  styleProperty: 'paddingVertical',
  transform: ({value}: {value: string}) => scaleUtils.vertical(value),
});

const moderatePaddingLeft = createRestyleFunction({
  property: 'paddingLeft',
  styleProperty: 'paddingLeft',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderatePaddingRight = createRestyleFunction({
  property: 'paddingRight',
  styleProperty: 'paddingRight',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderatePaddingHorizontal = createRestyleFunction({
  property: 'paddingHorizontal',
  styleProperty: 'paddingHorizontal',
  transform: ({value}: {value: string}) => scaleUtils.horizontal(value),
});

const moderateGap = createRestyleFunction({
  property: 'gap',
  styleProperty: 'gap',
  transform: ({value}: {value: string}) => scaleUtils.moderate(value),
});

const moderateColumnGap = createRestyleFunction({
  property: 'columnGap',
  styleProperty: 'columnGap',
  transform: ({value}: {value: string}) => scaleUtils.moderate(value),
});

const moderateRowGap = createRestyleFunction({
  property: 'rowGap',
  styleProperty: 'rowGap',
  transform: ({value}: {value: string}) => scaleUtils.moderate(value),
});

export const moderateSpacing = [
  moderateMarginTop,
  moderateMarginBottom,
  moderateMarginVertical,
  moderateMarginHorizontal,
  moderateMarginLeft,
  moderateMarginRight,
  moderatePaddingTop,
  moderatePaddingBottom,
  moderatePaddingVertical,
  moderatePaddingLeft,
  moderatePaddingRight,
  moderatePaddingHorizontal,
  moderateGap,
  moderateColumnGap,
  moderateRowGap,
];

export type ModerateSpacingProps<Theme extends BaseTheme> = Omit<
  SpacingProps<Theme>,
  | 'margin'
  | ' marginStart'
  | 'marginStart'
  | 'marginEnd'
  | 'padding'
  | 'paddingStart'
  | 'paddingEnd'
>;
