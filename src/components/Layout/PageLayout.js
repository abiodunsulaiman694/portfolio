import React from 'react'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'
import styles from './styles/PageLayout.module.css'

export default function PageLayout(props){
    return(
    
        <div className={styles.layout}>
        
            <NavBar />
            {props.children}
            <Footer />
        </div>
        
    )
}