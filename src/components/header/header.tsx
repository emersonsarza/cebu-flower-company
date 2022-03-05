import { FunctionComponent } from 'react';

import Logo from '../logo';

import {
  CompanyName,
  CompanyLogo,
  Container,
  MenuContainer,
  MenuItem,
} from './styles';

const menus = [
  {
    name: 'FRESH FLOWERS',
    uri: '',
  },
  {
    name: 'DRIED',
    uri: '',
  },
  {
    name: 'IN A BOX / BASKET',
    uri: '',
  },
  {
    name: 'CHOCOLATE BOUQUET',
    uri: '',
  },
  {
    name: 'MONEY BOUQUET',
    uri: '',
  },
  {
    name: 'SYMPATHY FLOWERS',
    uri: '',
  },
  {
    name: 'WEDDINGS',
    uri: '',
  },
];

const Header: FunctionComponent = () => {
  return (
    <Container>
      <CompanyLogo>
        <Logo />
      </CompanyLogo>
      <CompanyName>Cebu Flower Company</CompanyName>
      <MenuContainer>
        {menus.map(({ name }) => (
          <MenuItem> {name} </MenuItem>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default Header;
