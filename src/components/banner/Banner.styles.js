import { createStyleWithClassName } from '../../utils/styles';

export const Container = createStyleWithClassName(
  'section',
  'relative w-full bg-pink-300 drop-shadow'
)`
  background: ${({ img }) => (img ? `url('${img}')` : '')};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;  
  color: #ffffff;
`;

export const TextContainer = createStyleWithClassName(
  'div',
  'flex flex-col items-center justify-center p-4 space-y-4'
)`
  min-height: 400px;
  backdrop-filter: contrast(0.6) blur(3px);
`;

export const Title = createStyleWithClassName(
  'h2',
  'font-bold text-3xl text-center drop-shadow-md'
)`
  animation: fadeIn ease-in-out 1s;
  
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;

export const Description = createStyleWithClassName(
  'p',
  'text-md md:text-xl text-center drop-shadow-md width-full md:w-1/2'
)`

  animation: fadeIn ease-in-out 1s;
    
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    50% {
      opacity:0.3;
    }
    100% {
      opacity:1;
    }
  }
`;
