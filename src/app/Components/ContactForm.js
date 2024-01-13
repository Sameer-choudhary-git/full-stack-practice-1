import React from 'react'
import styles from '@/app/Contact/contact.module.css'
const ContactForm = () => {
  return (
    <form className={styles.contact_form}>
        <div className={styles.input_field}>
            <label htmlFor='username' className={styles.label} >  
                Name:
                <input  type='text' name='username' id='username' placeholder='Enter your Username' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='email' className={styles.label} >  
                Email:
                <input  type='text' name='email' id='email' placeholder='Enter your Email' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='phone' className={styles.label} >  
                Phone number:
                <input  type='text' name='phone' id='phone' placeholder='Enter your Phone no.' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='message' className={styles.label} >  
                Message:
                <textarea  type='text' name='message' id='message' placeholder='Enter your Message' rows={5} />
            </label>
        </div>

        <button type='submit'> Send Message</button>

    </form>
    )
}

export default ContactForm