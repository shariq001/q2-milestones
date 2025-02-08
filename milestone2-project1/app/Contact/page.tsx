import React from 'react'
import styles from '@/styles/Contact.module.css'

const Contact = () => {
  return (
    <div id={styles['main']}>
        <h1>Lets Design Together</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. <br /> Aliquet donec morbi convallis pretium</p>
        <form action="">
            <label htmlFor="Name">Name:</label>
            <input type="text" placeholder='Enter Your Full Name'/>
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder='Enter Your Email'/>
            <label htmlFor="Message">Message:</label>
            <textarea  placeholder='Enter Your Message'/>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact