import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/hero.png';
import styled from 'styled-components';
import { FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    background-size: auto;
  }
`;

const Navbar = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  
  .logo {
    font-size: 1em;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 1.5em;
    margin: 0 auto;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .icons {
    display: flex;
    gap: 1.5em;

     @media (max-width: 768px) {
      display: none;
    }
  }

  .hamburger {
    display: none;
    font-size: 1.5em;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const CollapsibleMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: none;
  list-style: none;
  padding: 1em 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  color: white;


`;

const HeroContent = styled(motion.div)`
  max-width: 700px;
  padding: 2em;
    display: contents;
  gap: 20px;

`;

const Hero = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <HeroSection>
      <Navbar>
        <div className="logo">MEGANADELUXE</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="icons">
          <FiUser size={20} />
          <FiSearch size={20} />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <CollapsibleMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </CollapsibleMenu>
          )}
        </AnimatePresence>
      </Navbar>
      
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Discover, Buy, and Sell Luxurious Watches</h1>
        <p>Join watch enthusiasts in a marketplace for every timepiece - from classic to cutting-edge.</p>
        <div className="cta-block">
          <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
            BROWSE WATCHES
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
            SEE YOUR WATCH
          </motion.button>
        </div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
