"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.header} sm:min-w-[320px] relative`}>
      {/* Logo */}
      <Image
        src="/Logo.png"
        width={150}
        height={50}
        alt="Logo"
        className={styles.logo}
      />

      {/* Desktop Navigation */}
      <nav className={`${styles.nav} hidden lg:flex`}>
        <Link href="/" className="border-b-[2px] border-black">
          Home <FontAwesomeIcon icon={faAngleDown} className={styles.dropdownIcon} />
        </Link>
        <Link href="/About" className="border-b-[2px] border-black">About us</Link>
        <Link href="">
          Services <FontAwesomeIcon icon={faAngleDown} className={styles.dropdownIcon} />
        </Link>
        <Link href="">Blog</Link>
        <Link href="">Contact us</Link>
      </nav>

      {/* Desktop Buttons */}
      <div className={`${styles.buttons} hidden lg:flex`}>
        <button className={styles.button}>Login</button>
        <button className={`${styles.button} ${styles.signupButton}`}>
          Sign up
        </button>
      </div>

      {/* Bars Button for Mobile */}
      <button
        className={`${styles.mobileMenuBtn} sm:block lg:hidden`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {/* Close Button */}
          <button
            className={styles.mobileMenuCloseBtn}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Mobile Navigation Links */}
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/About" onClick={toggleMenu}>
              About us
            </Link>
            <Link href="" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="" onClick={toggleMenu}>
              Contact us
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className={styles.mobileButtons}>
            <button className={styles.mobileButton}>Login</button>
            <button className={styles.mobileButton}>Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
