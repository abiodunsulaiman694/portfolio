import React, {useState, createContext} from 'react'
// import Portfolio from '../datas/Portfolio'

export const PortfolioContext = createContext()

export function PortfolioProvider(props){

    const [projects, setProjects] = useState([])



    return(
        <PortfolioContext.Provider value={{projects, setProjects}}>
                {props.children}

        </PortfolioContext.Provider>
        
       
    )
}