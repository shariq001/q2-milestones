import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faUsers } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div id={styles["main-container"]} >
      
      {/* Section 1 */}
      <div id={styles["section1"]} >
        <div>
          <h1 id={styles["section1-h1"]} >Committed To People Committed To <span id={styles["section1-h1-span"]}>The Future</span></h1>
        </div>

        <Image id={styles["section1-img"]} src='/home-img1.png' width={600} height={627} alt='Card Screens'/>
      </div>

      {/* Section 2 */}
      <div id={styles["section2"]}>

        {/* 1 */}
        <div  className={styles.section2_sub}>
          <div className={styles.section2_sub_left} id={styles["sub-1"]}>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} style={{color: '#8247a6'}}/>
          </div>
          <div>
            <p className={styles.para1}>15k+</p>
            <p className={styles.para2}>Acive user</p>
          </div>
        </div>

        {/* 2 */}
        <div  className={styles.section2_sub}>
          <div className={styles.section2_sub_left} id={styles["sub-2"]}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} style={{color: '#b6912c'}}/>
          </div>
          <div>
            <p className={styles.para1}>30k+</p>
            <p className={styles.para2}>Total <br className='sm:block md:hidden'/> Download</p>
          </div>
        </div>

        {/* 3 */}
        <div  className={styles.section2_sub}>
          <div className={styles.section2_sub_left} id={styles["sub-3"]}>
            <FontAwesomeIcon icon={faUsers} id={styles['icon-3']} className={styles.icon} style={{color: '#5ac9a4'}}/>
          </div>
          <div>
            <p className={styles.para1}>10k+</p>
            <p className={styles.para2}>Customer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home