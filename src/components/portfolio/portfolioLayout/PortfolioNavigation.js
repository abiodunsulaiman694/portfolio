import React, { useContext, useState, useEffect } from 'react'
import styles from './styles/PortfolioNavigation.module.css'
import {Portfolio} from '../../../datas/Portfolio'
import {PortfolioContext} from '../../../context/PortfolioContext'

export default function PortfolioNavigation(){

    const [showActive, setShowActive] = useState("ALL")

    const {setProjects} = useContext(PortfolioContext)


    useEffect(() => {

        onchange()

    })

    const allProjects = Portfolio || [];
    const personalProjcet = allProjects.filter(personal => (personal.type === "personal"))
    const otherProjcet = allProjects.filter(others => (others.type === "others"))



function onchange(){
    showActive === "PERSONAL" ? (setProjects(personalProjcet)) : 
    showActive === "OTHERS" ? (setProjects(otherProjcet)) : (setProjects(allProjects))
        }
 

    return(
        <div className={styles.navBg}>
            <div className={styles.btnContainer}>
                <button onClick={()=>(setShowActive("ALL"))} className={(showActive === "ALL") ? [styles.active] : ""}  disabled = {showActive === "ALL"}>all</button>
                <button onClick={()=>(setShowActive("PERSONAL"))} className={`${styles.btn} ${showActive === "PERSONAL"} ? ${styles.active} : "" `}   disabled = {showActive === "PERSONAL"}>personal</button>
                <button onClick={()=>(setShowActive("OTHERS"))} className={`${styles.btn} ${showActive === "OTHER"} ? ${styles.active} : "" `}   disabled = {showActive === "OTHERS"}>others</button>
            </div>
        </div>
    )
}