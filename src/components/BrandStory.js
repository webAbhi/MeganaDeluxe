// components/BrandStory.js
import React from 'react';
import styled from 'styled-components';

const StorySection = styled.section`
  padding: 4em 2em;
  background-color: #fff;
  text-align: center;
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.8;
  color: #555;
`;

const BrandStory = () => (
  <StorySection>
    <h2>Our Story</h2>
    <StoryContent>
      <p>
        Born from a passion for excellence, our brand redefines luxury. We believe in crafting products
        that not only look beautiful but also stand the test of time. Each piece is a symbol of elegance
        and a testament to uncompromising quality.
      </p>
      <p>
        Our journey began with a vision of bringing sophistication into the everyday. Today, we continue
        that legacy by blending modern aesthetics with timeless luxury.
      </p>
    </StoryContent>
  </StorySection>
);

export default BrandStory;
