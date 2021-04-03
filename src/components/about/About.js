import React, {useState, useEffect} from 'react'
import styles from './styles/About.module.css'
import { Profile } from '../../datas/Profile'

export default function About(){
    const [about, setAbout] = useState();
    const [services, setServices] = useState()


    useEffect(() => {
        setAbout(Profile.aboutMe);
        setServices(Profile.services)
    },
    [])
    
    return(
        <div className={styles.aboutBg}>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutHeader}>about me</h2>
                <p className={styles.myProfile}>
                    {about}
                </p>
                <h3 className={styles.explore}>EXPLORE</h3>

                <div className={styles.myService}>
                    {
                      services && services.map(service => (
                          <div className={styles.service} key={service.id}>
                            <h3 className={styles.serviceHeader}>{service.title}</h3>
                            <span className={styles.serviceBody}>{service.details}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}