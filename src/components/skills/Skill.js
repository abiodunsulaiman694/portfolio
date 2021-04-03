import React from 'react'
import styles from './styles/Skill.module.css'
import UsingNow from './skillSets/UsingNow'
import LearningNow from './skillSets/Learning'
import OtherSkills from './skillSets/OthersSkills'

export default function Skill(){
    return(
        <div className={ styles.skillBg}>
            <div className={styles.skillContainer}>
                <h3 className={styles.skillHeader}>
                    skills
                </h3>
                <div>
                    <UsingNow />

                    <LearningNow />

                    <OtherSkills />
                </div>
            </div>
        </div>
    )
}