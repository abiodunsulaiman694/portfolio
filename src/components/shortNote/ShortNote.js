import React from 'react'
import styles from './styles/ShortNote.module.css'

export default function ShortNote(){
    return(
        <div className={styles.noteBg}>
            <div className={styles.noteContainer}>
            <h3>what is it</h3>
            <p>
                lorem 
            </p>
            </div>
        </div>
    )
}