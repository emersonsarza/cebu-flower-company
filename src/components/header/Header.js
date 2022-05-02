import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/solid';

import {
  BodyContainer,
  CheckoutContainer,
  Container,
  EmptyContainer,
  HeaderContainer,
  LogoContainer,
  Menu,
  MenuOptions,
  MenuMobile,
  MenuMobileHeader,
  NavItem,
  MenuItem,
} from './Header.styles';

const navItems = [
  {
    name: 'Fresh Flowers',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Dried Flowers',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'In a Box/Basket',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
  {
    name: 'Chocolate Bouquet',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
  {
    name: 'Money Bouquet',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
  {
    name: 'Sympathy Flowers',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
  {
    name: 'Weddings',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleShow = (e) => {
    e.preventDefault();
    setShow((v) => !v);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <LogoContainer>Cebu Flower Company</LogoContainer>
          <CheckoutContainer>
            <ShoppingCartIcon className='h-6' />
          </CheckoutContainer>
          <Menu>
            <MenuIcon onClick={toggleShow} className='h-6 cursor-pointer' />
          </Menu>
          <BodyContainer>
            {navItems.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </BodyContainer>
        </HeaderContainer>
      </Container>
      <Transition
        enter='transition ease-in-out duration-100'
        leave='transition ease-in-out duration-0'
        show={show}
      >
        <MenuMobile>
          <Transition.Child
            enter='transition ease-in-out duration-700 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-700 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <MenuOptions show={show}>
              <MenuMobileHeader>
                <XIcon onClick={toggleShow} className='h-6 cursor-pointer' />
              </MenuMobileHeader>
              {navItems.map(({ name, href }) => (
                <MenuItem key={name} href={href}>
                  {name}
                </MenuItem>
              ))}
            </MenuOptions>
          </Transition.Child>
        </MenuMobile>
      </Transition>
      <EmptyContainer />
    </>
  );
};

export default Header;
