import React from 'react';
import styled from 'styled-components';
import watch2 from '../assets/watch2.png'
import { motion } from 'framer-motion';

const CommunitySection = styled.section`
  padding: 0em 4em;
  background-color: #10263C;
  color: white;
  display: flex;
  margin-bottom: 20vh;

  div {
  width: 30vw;
  line-height: 39px;
  }
  *{
    margin: auto;
  }
`;
const Collection = styled.section`
    display: flex;
    justify-content: space-around;
`;

const Community = () => (
  <CommunitySection>
    <img src={watch2} alt="watch_image"/>
    <div className='howItWorkContainer'>
        <h2>Join the MAGANADELUXE Community</h2>
        <p>Buy, sell, and connect with luxury watch enthusiasts worldwide. Your perfect timepiece is just a click away.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-secondary-button">
            REGISTER NOW
        </motion.button>
    </div>
    
  </CommunitySection>
);

export default Community;
