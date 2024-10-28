import React from "react";
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";

const ReviewContainer = styled.div`
  text-align: center;
  color: #6E6E6A;
  width: 580px;
  margin-bottom: 35px;
  display: flex;
  gap: 30px;
  line-height: 24px;
  opacity: 0.9;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  img{
    height: 59px !important;
    width: 59px !important;
    margin-top: 3px;
  }
  *{
    margin: 0;
  }
  h1{
    font-size: 100px;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 4px;
`;

const Review = ({ profilePicture, desc, star = 5, name }) => (
  <ReviewContainer>
    <img src={profilePicture} alt="profile_picture" />
    <div className='aboutusContent'>
      <h6>{name}</h6>
      <p>{desc}</p>
      <Stars>
      {[...Array(star)].map((_, index) => (
        <FaStar size="12px" key={`star-${index}`} />
      ))}  
      </Stars>
    </div>
    <h1>"</h1>
  </ReviewContainer>
);

export default Review;
