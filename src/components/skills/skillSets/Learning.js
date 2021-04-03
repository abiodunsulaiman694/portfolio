import React, { useState, useEffect } from 'react'
import styles from './styles/Learning.module.css'
import { Profile } from '../../../datas/Profile'

export default function LearningNow(){

    const [learning, setLearning] = useState()

    useEffect(() => {
        setLearning(Profile?.skills?.learning)
    },
    [])
    console.log(learning)

    return(
        <>
        <div className={styles.container}>
            <h3 className={styles.header}>Learning Now:</h3>
            <div className={styles.gridBody}>
                {
                    learning && learning.map(learningNow => (
                        <div className={styles.skillsCard}>
                            <img className={styles.logo} src={learningNow.logo} alt="logo" />
                            <span className={styles.skillTitle}>{learningNow.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}