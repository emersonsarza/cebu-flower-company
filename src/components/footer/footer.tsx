import { FunctionComponent } from 'react';
import Logo from '../logo';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import {
  CompanyName,
  CompanyDetails,
  CompanyInfo,
  Container,
  Details,
  LinkItem,
  Links,
  SocialContainer,
} from './styles';

const Footer: FunctionComponent = () => {
  return (
    <Container data-testid='footer'>
      <Details>
        <CompanyInfo>
          <Logo />
          <CompanyDetails>
            <LinkItem>Cebu Flower Company</LinkItem>
            <LinkItem>cebuflowerco@gmail.com</LinkItem>
            <LinkItem>+63 995 1234 567</LinkItem>
            <SocialContainer>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </SocialContainer>
          </CompanyDetails>
        </CompanyInfo>
        <Links>
          <LinkItem>FAQs</LinkItem>
          <LinkItem>How to pay</LinkItem>
          <LinkItem>Returns and refunds</LinkItem>
          <LinkItem>Sitemap</LinkItem>
        </Links>
        <Links>
          <LinkItem>Terms and conditions</LinkItem>
          <LinkItem>Terms of use</LinkItem>
          <LinkItem>Privacy policy</LinkItem>
          <LinkItem>Acceptance policy</LinkItem>
          <LinkItem>Cookie policy</LinkItem>
        </Links>
        <Links>
          <LinkItem>Shop</LinkItem>
          <LinkItem>Contact Us</LinkItem>
          <LinkItem>About Us</LinkItem>
        </Links>
      </Details>
      <CompanyName>
        © 2022 / CEBU FLOWER COMPANY / ALL RIGHTS RESERVED
      </CompanyName>
    </Container>
  );
};

export default Footer;
