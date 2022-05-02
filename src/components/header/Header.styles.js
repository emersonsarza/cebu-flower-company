import { createStyleWithClassName } from '../../utils/styles';

export const Container = createStyleWithClassName(
  'header',
  'absolute w-full z-10 border-b-2 border-black shadow-md'
)`
`;

export const HeaderContainer = createStyleWithClassName(
  'div',
  'relative flex flex-col max-w-7xl mx-auto'
)``;

export const LogoContainer = createStyleWithClassName(
  'div',
  'flex items-center justify-center h-16 p-4 lg:translate-y-4 text-xl font-bold'
)``;

export const Menu = createStyleWithClassName(
  'div',
  'absolute left-4 h-16 flex items-center justify-center lg:hidden'
)``;

export const CheckoutContainer = createStyleWithClassName(
  'div',
  'absolute right-4 h-16 flex items-center justify-center'
)``;

export const BodyContainer = createStyleWithClassName(
  'nav',
  'items-center justify-center h-16 hidden lg:flex'
)``;

export const NavItem = createStyleWithClassName(
  'a',
  'items-center justify-center h-16 p-4 hidden lg:flex hover:bg-pink-100 hover:drop-shadow rounded-t'
)``;

export const EmptyContainer = createStyleWithClassName(
  'div',
  'w-full h-16 lg:h-32'
)`
`;

export const MenuMobile = createStyleWithClassName(
  'div',
  'fixed h-screen w-full z-20 pr-4 lg:hidden'
)`
  backdrop-filter: brightness(0.8) blur(2px);
`;

export const MenuOptions = createStyleWithClassName(
  'div',
  'relative bg-white h-screen w-1/2 min-w-min max-w-lg drop-shadow-md flex flex-col'
)`
`;

export const MenuMobileHeader = createStyleWithClassName(
  'div',
  'h-16 w-full border-b border-gray-900 flex items-center justify-end p-4'
)`
  min-width: 300px;
`;

export const MenuItem = createStyleWithClassName(
  'a',
  'h-12 w-full text-sm flex items-center border-b border-gray-900 text-left p-4 hover:bg-pink-100 hover:font-bold'
)`
  min-width: 300px;
`;
