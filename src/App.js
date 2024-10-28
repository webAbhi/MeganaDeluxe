import React from 'react';
import Hero from './components/Hero';
import FeaturedWatches from './components/FeaturedWatches';
import Testimonials from './components/Testimonials';
import ShortBrandStory from './components/ShortBrandStory';
import HowItWorks from './components/HowItWorks'
import Community from './components/Community';
function App() {
  return (
    <div>
      <Hero />
      <ShortBrandStory/>
      <FeaturedWatches />
      <HowItWorks/>
      <Testimonials />
      <Community />
    </div>
  );
}

export default App;