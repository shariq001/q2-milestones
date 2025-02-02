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
        <div id={styles['mobile-div']} >
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
            className={styles.mobileLinks}
          >
            Work
          </Link>
          <Link
            href='/About'
            onClick={toggleMenu}
            className={styles.mobileLinks}
          >
            About
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className={styles.mobileLinks}
          >
            Playground
          </Link>
          <Link
            href=''
            onClick={toggleMenu}
            className={styles.mobileLinks}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
