import { css } from 'styled-components';
import { createStyleWithClassName } from '../../utils/styles';

const opacityAnim = css`
  animation: appear 2s ease-in-out;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

const slideFromTop = css`
  animation: slideFromTop 1s ease-in-out;
  @keyframes slideFromTop {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const slideFromBottom = css`
  animation: slideFromBottom 1s ease-in-out;
  @keyframes slideFromBottom {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const TextContainer = createStyleWithClassName(
  'div',
  'flex flex-col items-center justify-center p-4 space-y-4  snap-start'
)`
  min-height: 400px;

  ${({ split }) =>
    split
      ? ''
      : `
      backdrop-filter: contrast(0.6) blur(3px) brightness(0.75);
    `}
`;

export const Title = createStyleWithClassName(
  'h2',
  'font-bold text-3xl text-center drop-shadow-md'
)``;

export const Description = createStyleWithClassName(
  'p',
  'text-md md:text-xl text-center drop-shadow-md w-3/4'
)``;

export const Container = createStyleWithClassName(
  'section',
  'relative w-full bg-pink-300 drop-shadow snap-center first:snap-start last:snap-end'
)`
  ${({ split, img, backgroundColor, textColor }) =>
    split
      ? `
    background-color: ${backgroundColor};
    color: ${textColor};
  `
      : `
    background: ${img ? `url('${img}')` : ''};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;  
  background-size: cover;  
    background-size: cover;  
    color: #ffffff;
  
  `}

  ${({ visible }) =>
    visible
      ? `
    ${Title} {
      ${slideFromTop}
    }
    ${Description} {
      ${slideFromBottom}
    }
  `
      : ''}
`;

export const Image = createStyleWithClassName('div', 'w-full snap-start')`
  background: ${({ src }) => (src ? `url('${src}')` : '')};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;  
  
  min-height: 400px;
`;
