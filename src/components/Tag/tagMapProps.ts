import {BoxProps} from '../Box/Box';

export type TagVariants = 'marked' | 'unmarked';

export const tagMapProps: Record<TagVariants, BoxProps> = {
  marked: {
    backgroundColor: 'PURPLE_LIGHT',
  },
  unmarked: {
    backgroundColor: 'TRANSPARENT',
    borderWidth: 1,
    borderColor: 'PURPLE',
  },
};
