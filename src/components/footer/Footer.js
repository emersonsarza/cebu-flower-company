import React from 'react';
import { HeartIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';

import {
  Container,
  CopyRight,
  OptionItem,
  Options,
  SocMed,
} from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <Options>
        <OptionItem>About</OptionItem>
        <OptionItem>Blog</OptionItem>
        <OptionItem>Jobs</OptionItem>
        <OptionItem>Press</OptionItem>
        <OptionItem>Accessibility</OptionItem>
        <OptionItem>Partners</OptionItem>
      </Options>
      <SocMed>
        <HeartIcon className='h-10 px-4 py-2 md:px-6' />
        <MailIcon className='h-10 px-4 py-2 md:px-6' />
        <PhoneIcon className='h-10 px-4 py-2 md:px-6' />
      </SocMed>
      <CopyRight>
        <span className='whitespace-nowrap'>© 2022 Cebu Flower Company.</span>
        <span className='whitespace-nowrap ml-1'>All Rights Reserved.</span>
      </CopyRight>
    </Container>
  );
};

export default Footer;
