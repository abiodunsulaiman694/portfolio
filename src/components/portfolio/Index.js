import React from 'react'
import styles from './styles/Index.module.css'
import PortfolioNavigation from './portfolioLayout/PortfolioNavigation'
import PortfolioFooter from './portfolioLayout/PortfolioFooter'
import PortfolioRender from './portfolioRender/PortfolioRender'
import {PortfolioProvider} from '../../context/PortfolioContext'

export default function Portfolio(){
    return(
        <PortfolioProvider>
        <div>
            <div className={styles.portfolioHeaderBg}>
                        <h3 className={styles.header}>portfolio</h3>
            </div>
            <PortfolioNavigation />

            <PortfolioRender />

            <PortfolioFooter />

        </div>
        </PortfolioProvider>
    )
}