import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Product from '../smallComponents/product';
import featuredWatch1 from '../assets/feturedWatch1.svg';
import featuredWatch2 from '../assets/featuredWatch2.svg'
import featuredWatch3 from '../assets/featureWatch3.svg'
const FeaturedSection = styled.section`
  padding: 6em 3em;
  background-color: #D9D9D9;
`;

const StoryContent = styled.div`
  font-size: 1.2em;
  line-height: 1.8;
  color: #555;
  margin-left: 100px;

  img {
    margin-top: 2em;
    width: 100%;
    max-width: 500px; /* Set a max-width if you want it to be responsive */
    height: auto;
  }
`;

const featuredProducts = [
  {
    image: featuredWatch1,
    heading: 'Jacob & Co.',
    subheading: 'Fascinator',
    price: '19989'
  },
  {
    image: featuredWatch2,
    heading: 'Rolex Paul Newman',
    subheading: 'Daytona Ref. 6239',
    price: '19989'
  },
  {
    image: featuredWatch3,
    heading: 'Graff Diamonds',
    subheading: 'Marie Antoinette',
    price: '19989'
  }
]

const FeaturedWatches = () => (
  <FeaturedSection>
    <StoryContent>
      <h2>Featured luxury watches</h2>
      <div className='watchCollection'>
        {featuredProducts.map((prod, index) =><Product key={`prod-${index}`}image={prod.image} heading={prod.heading} subheading={prod.subheading} price={prod.price} />)}
      </div>
    </StoryContent>
    <div className='alignCenterWithSpace'>
      <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
        VIEW ALL WATCHES
      </motion.button>
    </div>
    
  </FeaturedSection>
);

export default FeaturedWatches;
