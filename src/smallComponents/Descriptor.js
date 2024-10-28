import React from 'react';
import styled from 'styled-components';

const DescriptorContainer = styled.div`
  text-align: center;
  color: #EAEBED;
  width: 280px;
  margin: 60px 0;
`;



const Descriptor = ({ Icon, description}) => (
  <DescriptorContainer>
    {Icon}
    <h3>{description}</h3>
  </DescriptorContainer>
);

export default Descriptor;
