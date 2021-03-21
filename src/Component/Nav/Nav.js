import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>
      {/*<img
        className='nav__logo'
        src={'../../assets/logo.png'}
        alt='Nikki Logo'
      />*/}
      <ul>
        <li>
          <a href='#hero'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
