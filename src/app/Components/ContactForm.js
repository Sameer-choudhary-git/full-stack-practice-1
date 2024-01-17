'use client'
import React, { useState } from 'react'
import styles from '@/app/Contact/contact.module.css'
const ContactForm = () => {
    const [user, setuser] = useState({
        username : "",
        email:"",
        phone:"",
        message:""
})
    

    const handleChange = (e)=>{
        const name = e.target.name;
        const value =e.target.value;
        setuser({...user,[name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user);
    }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor='username' className={styles.label} >  
                Name:
                <input  type='text' name='username' id='username' onChange={handleChange} value={user.username} placeholder='Enter your Username' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='email' className={styles.label} >  
                Email:
                <input onChange={handleChange} type='text' name='email' id='email' value={user.email} placeholder='Enter your Email' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='phone' className={styles.label} >  
                Phone number:
                <input  type='number' name='phone' onChange={handleChange} id='phone' value={user.phone} placeholder='Enter your Phone no.' />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='message' className={styles.label} >  
                Message:
                <textarea  type='text' name='message' id='message' onChange={handleChange} value={user.message} placeholder='Enter your Message' rows={5} />
            </label>
        </div>

        <button type='submit'> Send Message</button>

    </form>
    )
}

export default ContactForm