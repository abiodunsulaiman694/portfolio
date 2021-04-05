import React from 'react'
import styles from './styles/Contact.module.css'

export default function Contact(){
    return(
        <div className={styles.contactBg}>

            <div className={styles.contactContainer}>
                <h3 className={styles.contactHeader}>contact me</h3>
                <p>for project, and consultation you can contact me.</p>
                <span></span>
                <form>

                    <div>
                        <input className={styles.input} placeholder="enter your name" />
                    </div>

                    <div>
                        <input className={styles.input} placeholder="enter your email" />
                    </div>

                    <div>
                        <input className={styles.input} placeholder="enter your phone number" />
                    </div>

                    <div>
                        <textarea className={styles.textarea} placeholder="your message" />
                    </div>
                        
                            <button className={styles.contactBtn}>submit</button>
                        
                </form>
            </div>
            
        </div>
    )
}