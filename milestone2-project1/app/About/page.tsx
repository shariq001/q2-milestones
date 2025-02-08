import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div id={styles['main']}>
        
        {/* Section 1 */}
        <div id={styles['section-1']}>
            {/* Left */}
            <div id={styles['left-1']}>
                Insert Your Photo
            </div>

            {/* Right */}
            <div id={styles['right-1']}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <h3>UX</h3>
                <div className={styles["progress-container"]}>
                    <div className={`${styles["progress-bar"]} ${styles["width-90"]}`}></div>
                </div>
                <h3>Website Design</h3>
                <div className={styles["progress-container"]}>
                    <div className={`${styles["progress-bar"]} ${styles["width-85"]}`}></div>
                </div>
                <h3>App Design</h3>
                <div className={styles["progress-container"]}>
                    <div className={`${styles["progress-bar"]} ${styles["width-95"]}`}></div>
                </div>
                <h3>Graphic Design</h3>
                <div className={styles["progress-container"]}>
                    <div className={`${styles["progress-bar"]} ${styles["width-90"]}`}></div>
                </div>
            </div>
        </div>

        {/* Section 2 */}
        <div id={styles['section-2']}>
            <h1>Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. <br /> Aliquet donec morbi convallis pretium</p>
            <div id={styles['services']}>

                {/* 1 */}
                <div className={styles['service']}>
                    <Image src="/service1.png" width="50" height="50" alt="UI/UX" />
                    <h2>UI/UX Design</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</h3>
                </div>

                {/* 2 */}
                <div className={styles['service']}>
                    <Image src="/service2.png" width="45" height="50" alt="Web Design" />
                    <h2>Web Design</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</h3>
                </div>

                {/* 3 */}
                <div className={styles['service']}>
                    <Image src="/service3.png" width="30" height="30" alt="App Design" />
                    <h2>App Design</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</h3>
                </div>

                {/* 4 */}
                <div className={styles['service']}>
                    <Image src="/service4.png" width="50" height="50" alt="Graphic Design" />
                    <h2>Graphic Design</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About