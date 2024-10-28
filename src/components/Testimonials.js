import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Review from '../smallComponents/review';
import user1 from '../assets/user1.svg';
import user2 from '../assets/user2.svg';
import user3 from '../assets/user3.svg';

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

const testimonials = [
  { profilePicture: user1, star: 5, name: "Joella Aylan", desc: "The purchasing experience was seamless, and the quality of the timepiece I received exceeded my expectations." },
  { profilePicture: user2, star: 4, name: "Jenifer Yen", desc: "I sold my vintage Rolex through Maganadeluxe and was impressed by the smooth process. The team handled everything professionally." },
  { profilePicture: user3, star: 4, name: "Eslian Toh", desc: "I entrusted MAGANADELUXE to sell my TAG Heuer, and the outcome was fantastic." },
];

const UsersTestimonial = () => (
  <StorySection>
    <StoryContent>
      <div className='aboutusContent'>
        <p>TESTIMONIALS</p>
        <h2>What Our Customers Say!</h2>
        <p>
          Discover why our clients trust MAGANADELUXE for buying and selling luxury watches.
        </p>
      </div>
      <div>
        {testimonials.map((data, index) => (
          <motion.div
            key={index}
            whileHover={{ x: -80 }}  
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Review
              profilePicture={data.profilePicture}
              desc={data.desc}
              star={data.star}
              name={data.name}
            />
          </motion.div>
        ))}
      </div>
    </StoryContent>
  </StorySection>
);

export default UsersTestimonial;
