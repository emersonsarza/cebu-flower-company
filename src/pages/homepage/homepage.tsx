import { FunctionComponent } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import Collections from '../../components/collections';

import collectionsData from './data.json';
import { ICollections } from '../../components/collections/types';

const Homepage: FunctionComponent = () => {
  const { items } = collectionsData as ICollections;
  return (
    <>
      <Header />
      <Collections items={items} />
      <Footer />
    </>
  );
};

export default Homepage;
