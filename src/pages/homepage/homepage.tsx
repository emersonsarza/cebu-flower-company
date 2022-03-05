import { FunctionComponent } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import { TemporaryBody } from './styles';

const Homepage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <TemporaryBody />
      <Footer />
    </>
  );
};

export default Homepage;
