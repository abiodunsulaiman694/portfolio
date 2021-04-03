import React, { useState, useEffect } from 'react'
import styles from './styles/OtherSkills.module.css'
import { Profile } from '../../../datas/Profile'

export default function OtherSkills(){

    const [otherSkills, setOtherSkills] = useState();

    useEffect(() => {

        setOtherSkills(Profile?.skills?.otherSkills)
    },
    [])

    return(
        <>
        <div className={styles.container}>
            <h3 className={styles.header}>others:</h3>
            <div className={styles.gridBody}>
                {
                    otherSkills && otherSkills.map(otherSkill => (
                        <div className={styles.skillsCard} key={otherSkill.id}>
                            <img className={styles.logo} src={otherSkill.logo} alt="logo" />
                            <span className={styles.skillTitle}>{otherSkill.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}