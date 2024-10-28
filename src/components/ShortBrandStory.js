import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/aboutus.svg';
import { motion } from 'framer-motion';
const StorySection = styled.section`
  padding: 6em 3em;
  background-color: #D9D9D9;
  display: flex;
  text-align: center;
`;

const StoryContent = styled.div`
  display: flex;
  gap: 15vw;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.8;
  color: #555;

  img {
    margin-top: 2em;
    width: 100%;
    max-width: 500px; /* Set a max-width if you want it to be responsive */
    height: auto;
  }
`;

const BrandStory = () => (
  <StorySection>
    <StoryContent>
      <div className='aboutusContent'>
        <h2>ABOUT US</h2>
        <p>
          MAGANA DELUXE is a premier online platform dedicated to buying and selling luxury watches. 
          Our carefully curated collection features exceptional timepieces from passionate sellers. 
          Sellers can list their watches for a small fee, connecting with serious buyers, while all 
          transactions are completed privately between users. Whether you're a buyer seeking the perfect 
          watch or a seller showcasing a unique piece, MAGANA DELUXE offers a trusted space for luxury 
          watch enthusiasts.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
            LEARN MORE ABOUT US
        </motion.button>
      </div>
      <img src={heroImage} alt="watch_image" />
    </StoryContent>
  </StorySection>
);

export default BrandStory;
