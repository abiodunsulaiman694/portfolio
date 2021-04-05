import React, {useContext} from 'react'
import {PortfolioContext} from '../../../context/PortfolioContext'
import {Link} from 'react-router-dom'
import styles from './styles/PortfolioRender.module.css'


export default function PortfolioRender(){
    
    const {projects} = useContext(PortfolioContext)


    return(
            <div className={styles.container}>
                {
                   projects && projects.map(project => (
                        <Link className={styles.projectCard}>
                            
                                <img className={styles.images} src={project.image} alt="images" />
                                <h3>{project.title}</h3>

                            
                        </Link>
                    ))
                }
            </div>

    )
}