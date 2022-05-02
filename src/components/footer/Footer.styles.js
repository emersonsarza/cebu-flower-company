const { createStyleWithClassName } = require('../../utils/styles');

export const Container = createStyleWithClassName(
  'footer',
  'flex flex-col items-center justify-center space-y-5 px-6 py-12 text-white'
)`
  background: linear-gradient(to right, #e3d4c0 , #a7977e);
`;

export const Options = createStyleWithClassName(
  'div',
  'flex flex-wrap items-center justify-center text-lg capitalize'
)``;

export const OptionItem = createStyleWithClassName(
  'div',
  'px-4 py-2 md:px-6'
)``;

export const SocMed = createStyleWithClassName(
  'div',
  'flex items-center justify-center'
)``;

export const CopyRight = createStyleWithClassName(
  'div',
  'flex flex-wrap items-center justify-center text-center'
)``;
