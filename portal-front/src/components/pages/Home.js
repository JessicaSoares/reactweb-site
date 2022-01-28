import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from '../About';
import Aboutother from '../Aboutother';

function Home() {
  return (
    <>
      <HeroSection />
      <Aboutother />
      <Cards />
    </>
  );
}

export default Home;
