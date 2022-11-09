import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Find The Best Flavor" />
      <h1 className='app__header-h1'>The Best Place for Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Jump right in and explore our menu!</p>
      <a className='custom__button' href="#menu">Explore Menu</a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
