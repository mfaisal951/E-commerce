import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On your Email</h1>
      <p>Subscribe to our newsLetter and stay updated</p>
      <div>
        <input type="Email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
