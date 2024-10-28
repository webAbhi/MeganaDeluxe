import React from 'react';
import styled from 'styled-components';
import Descriptor from '../smallComponents/Descriptor';
import { FaUserCheck } from "react-icons/fa6";
import { BsWatch } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
const TestimonialsSection = styled.section`
  padding: 4em 2em;
  background-color: #10263C;
  color: white;

`;
const Collection = styled.section`
    display: flex;
    justify-content: space-around;
`;

const testimonials = [
  { text: "Sign up and join our community of watch enthusiasts.", icon: <FaUserCheck size="39px" /> },
  { text: "Post your watch for sale or browse through our exclusive collection.", icon: <BsWatch size="39px" /> },
  { text: "Make a purchase or finalize your sale through our secure platform.", icon: <GrSecure size="39px" /> },
];

const Testimonials = () => (
  <TestimonialsSection>
    <div className='howItWorkContainer'>
        <h2>HOW IT WORKS?</h2>
        <Collection>
            {testimonials.map((data) => <Descriptor Icon={data.icon} description={data.text}/>)}
        </Collection>
    </div>
   
  </TestimonialsSection>
);

export default Testimonials;
