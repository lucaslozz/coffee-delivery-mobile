import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontal = (size: number) => (width / guidelineBaseWidth) * size;

const vertical = (size: number) => (height / guidelineBaseHeight) * size;

const moderate = (size: number, factor = 0.5) =>
  size + (horizontal(size) - size) * factor;

const proportion = (width: number, height: number, size: number) =>
  (size * height) / width;

export const scaleUtils = {vertical, horizontal, moderate, proportion};
