import React, { FunctionComponent } from 'react';
import { ILogo } from './types';
import { Container } from './styles';

import { ReactComponent as CFCLogo } from '../../assets/logo/cfc.svg';

const Logo: FunctionComponent<ILogo> = ({ size }) => {
  return (
    <Container>
      <CFCLogo />
    </Container>
  );
};

export default Logo;
