import React, { useContext, useState, useEffect } from 'react'
import styles from './styles/PortfolioNavigation.module.css'
import {Portfolio} from '../../../datas/Portfolio'
import {PortfolioContext} from '../../../context/PortfolioContext'

export default function PortfolioNavigation(){

    const [showActive, setShowActive] = useState("ALL")

    const [projects, setProjects] = useContext(PortfolioContext)

    useEffect(() => {
        allProjects()
    },
    [])



    const allProject = Portfolio || [];

    function allProjects(){
        setShowActive("ALL")
        setProjects(allProject)
    }

    function personalP(){
        setShowActive("PERSONAL")
        const personalProject =  allProject.filter(projects => (projects.type === "personal" ))
        setProjects(personalProject)
    }

    function othersP(){
        setShowActive("OTHERS")
        const otherProjects = allProject.filter(design =>( design.type === "others" ))
        setProjects(otherProjects)
    }
 

    return(
        <div className={styles.navBg}>
            <div className={styles.btnContainer}>
                <button onClick={allProjects} className={(showActive === "ALL") ? [styles.active] : ""}  disabled = {showActive === "ALL"}>all</button>
                <button onClick={personalP} className={`${styles.btn} ${showActive === "PERSONAL"} ? ${styles.active} : "" `}   disabled = {showActive === "PERSONAL"}>personal</button>
                <button onClick={othersP} className={`${styles.btn} ${showActive === "OTHER"} ? ${styles.active} : "" `}   disabled = {showActive === "OTHERS"}>others</button>
            </div>
        </div>
    )
}