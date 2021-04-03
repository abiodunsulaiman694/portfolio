import React, { useEffect, useState } from 'react'
import styles from './styles/UsingNow.module.css'
import {Profile} from '../../../datas/Profile'



export default function UsingNow(){

    const [usingNow, setUsingNow] = useState();

    useEffect(() => {
        setUsingNow(Profile?.skills?.inUse)
    },
    [])

    console.log(usingNow)

    return(
        <>
            <div className={styles.container}>
                <h3 className={styles.header}>using now:</h3>
                <div className={styles.gridBody}>
                    {
                  usingNow && usingNow.map((useNow) => (
                        <div className={styles.skillCard} key={useNow.id}>
                            <img className={styles.logo} src={useNow.logo} alt="html" />
                            <span className={styles.skillTitle}>{useNow.title}</span>
                        </div>
                    ))
                    }
                </div>
            </div>
            </>
    )
}