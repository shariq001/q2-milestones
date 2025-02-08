import React from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div id={styles['main']}>
      
      {/* Left */}
      <div id={styles['left']}>
        <h4>Hi I am</h4>
        <h3>Fawzi Sayed</h3>
        <h1>UI & UX <br /> <span>Designer</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <button>Hire Me</button>
      </div>

      {/* Right */}
      <div id={styles['right']}>
        Insert Your Photo
      </div>




    </div>
  )
}

export default Home