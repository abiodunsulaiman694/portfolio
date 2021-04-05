import React, {useContext} from 'react'
import {PortfolioContext} from '../../../context/PortfolioContext'
import {Link} from 'react-router-dom'
import styles from './styles/PortfolioRender.module.css'


export default function PortfolioRender(){
    
    const [projects, setProjects] = useContext(PortfolioContext)

console.log(projects)
    return(
            <div className={styles.container}>
                {
                    projects.map(project => (
                        <Link className={styles.projectCard}>
                            
                                <img className={styles.images} src={project.image} alt="images" />
                                <h3>{project.title}</h3>

                            
                        </Link>
                    ))
                }
            </div>

    )
}