import React from 'react'
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <div id={styles['main-container']}>
        
        {/* Section 1 */}
        <div id={styles["section1"]}>
            <h1 id={styles['section1-h1']}>We Are Focused On <br /> Your <span id={styles["h1-span"]}>Ultimate Goal</span></h1>
            <p id={styles["section1-p"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nihil sint assumenda facilis natus explicabo alias.</p>
        </div>

        {/* Section 2 */}
        <div id={styles['section2']}>

          {/* 1 */}
          <div className={styles.subdiv}>
            <h2>Automatic Time Tracking</h2>
            <p>Time Tracking is never been easier.</p>
          </div>

          {/* 2 */}
          <div className={styles.subdiv}>
            <h2>Customizable Dashboard</h2>
            <p>Time Tracking is never been easier.</p>
          </div>

          {/* 3 */}
          <div className={styles.subdiv}>
            <h2>Statistics Retroactively</h2>
            <p>Time Tracking is never been easier.</p>
          </div>
        </div>
    </div>
  )
}

export default About