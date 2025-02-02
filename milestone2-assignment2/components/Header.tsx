"use client"

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id={styles['main-container']} >
      <h1 >ma.</h1>
      <nav>
        <Link href='/'>Work</Link>
        <Link href='/About'>About</Link>
        <Link href=''>Playground</Link>
        <Link href=''>Contact</Link>
      </nav>
      <div className='lg:hidden sm:block'>
        <button type='button' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className={styles.toggleButtons} />
        </button>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className='fixed top-0 right-0 h-[250px] w-[150px] bg-white bg-opacity-90 shadow-lg z-50 flex flex-col px-6 py-8 space-y-4'>
          {/* Close Button */}
          <div className='w-full flex justify-end'>
            <button onClick={toggleMenu} className={styles.toggleButtons}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Navigation Links */}
          <Link
            href='/'
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Work
          </Link>
          <Link
            href='/About'
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            About
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Playground
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className='text-[18px] font-medium hover:text-gray-500'
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
