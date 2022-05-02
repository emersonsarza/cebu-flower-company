import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';

const bannerItems = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0047/3146/9917/files/pexels-photo-101472.jpeg?v=1565980542',
    title: `Mother's Day Sale`,
    description: `Show your mom a wonderful Mother’s Day with a special delivery from
  Proflowers. Nothing says “Happy Mother’s Day!” better than a gorgeous
  floral bouquet, delicious chocolate treats, or a special gift basket.
  Selected a great gift and have it delivered to all the moms in your
  life in time for Sunday, May 8 by Proflowers.`,
  },
  {
    img: 'https://images.unsplash.com/photo-1579039063673-01eaba98a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    title: `Mother's Day Sale`,
    description: `Show your mom a wonderful Mother’s Day with a special delivery from
  Proflowers. Nothing says “Happy Mother’s Day!” better than a gorgeous
  floral bouquet, delicious chocolate treats, or a special gift basket.
  Selected a great gift and have it delivered to all the moms in your
  life in time for Sunday, May 8 by Proflowers.`,
  },
  {
    img: 'https://images.unsplash.com/photo-1614107707976-08d6c92adc03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
    title: `Mother's Day Sale`,
    description: `Show your mom a wonderful Mother’s Day with a special delivery from
  Proflowers. Nothing says “Happy Mother’s Day!” better than a gorgeous
  floral bouquet, delicious chocolate treats, or a special gift basket.
  Selected a great gift and have it delivered to all the moms in your
  life in time for Sunday, May 8 by Proflowers.`,
  },
];

const HomePage = () => {
  return (
    <>
      <Header />
      {bannerItems.map((item) => (
        <Banner {...item} />
      ))}
      <Footer />
    </>
  );
};

export default HomePage;
