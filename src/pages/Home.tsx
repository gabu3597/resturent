import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import MenuPreview from '../components/Home/MenuPreview';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <MenuPreview />
    </>
  );
};

export default Home;
