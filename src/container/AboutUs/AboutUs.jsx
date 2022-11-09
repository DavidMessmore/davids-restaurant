import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-content_us flex__center'>
      <img src={images.aboutus} alt="about_us" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>We are a fine dining restaurant known for our exotic and superb food, be sure to check out!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>After looking for the best ingredients through all Middle-earth, our founder fought Darth Vader in Hogwarts, and finally, after winning, he realized that the perfect ingredients were already at his disposal, and thus the famous ice cream pizza was created!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
