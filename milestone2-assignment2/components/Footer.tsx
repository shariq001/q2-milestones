import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer id={styles['main-container']}>
        <h2 >Mehmet Akif Karasu -- 2020 </h2>
        <nav>
            <Link href=''>Artstation</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Twitter</Link>
        </nav>
    </footer>
  )
}

export default Footer