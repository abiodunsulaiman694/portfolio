import React, { useState, useEffect } from 'react'
import styles from './styles/Banner.module.css'
import { NavLinks } from '../shared/NavLinks'
import { Link } from 'react-router-dom'
import {Profile} from '../../datas/Profile'
import promzzy from '../../resources/promzzy2.png'


export default function Banner(){
    const [navlink, setNavLink] =useState([]);
    const [myProfile, setMyProfile] = useState({})

    useEffect(() => {
        setNavLink(NavLinks)
        setMyProfile(Profile)
    },
    [])
    return(
        <>
        <div className={styles.banner}>
        <div className={styles.bannerContainer}>

            <div className={styles.bgGray}>
            <div className={styles.bannerGray}>


                <div className={styles.logo}>
                    logo
                </div>


                <div className={styles.bannerIntroduction}>
                <span className={styles.greet}>Hi, i am</span>
                <span className={styles.name}>{myProfile.surname} {myProfile.firstName}</span>
                <span className={styles.stack}>{myProfile.stack}</span>
                </div>


                <div className={styles.socialLinks}>
                    <span>git</span>
                    <span>git</span>
                    <span>git</span>
                </div>
            </div>
            </div>
            <div className={styles.bgBlack}>
            <div className={styles.bannerBlack}>
                <ul className={styles.bannerNav}>
                    {
                        navlink.map( link =>  (
                            <li>
                                <Link className={styles.bannerNavLink}>
                                {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <img src={promzzy} alt="promzzy" className={styles.bannerImage} />
            </div>
            </div>
        </div>
        </div>
        </>
    )
}