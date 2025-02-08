import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div id={styles['main']}>
        <h1>FULL NAME</h1>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/About'>About Me</Link>
            <Link href='/Contact'>Contact</Link>
            <button>Download CV</button>
        </nav>
    </div>
  )
}

export default Header