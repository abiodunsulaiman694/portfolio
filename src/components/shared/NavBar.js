import React, {useState, useEffect} from 'react'
import {NavLinks} from './NavLinks'
import {Link} from 'react-router-dom'
import styles from './styles/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    
const [navLinks, setNavLinks] = useState([])
const [toggle, setToggle] = useState(false)

// const logo = {
//     daskTop: "",
//     mobile: ""
// }

function toggled(){setToggle(!toggle)}

useEffect(() => {
    setNavLinks(NavLinks);
}
,[])

    return(
        <>
        <div className={styles.navBg}>
        <div className={styles.navBar}>

            <div className={styles.logo}>
                LOGO
            </div>

                <div className={styles.menuToggle} onClick={toggled}>
                 {
                   toggle ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />
                }
                </div>
            <ul  className={ toggle ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`} >
                {
                    navLinks.map(navLink => (
                        <li >
                           <Link className={styles.navItem}> 
                           {navLink.title} 
                           </Link>
                        </li>
                    ))
                }
            </ul>

        </div>
        </div>
        </>
    )
}