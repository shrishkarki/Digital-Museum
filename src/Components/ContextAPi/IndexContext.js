import React,{createContext, useState} from 'react';

const IndexContext=createContext();
const IndexContextProvider = ({children}) => {

    const [emailAddress,setEmailAddress]=useState("");

 
    return(
        <IndexContext.Provider value={{emailAddress,setEmailAddress}}>
            {children}
        </IndexContext.Provider>
    )
 
}

export  {IndexContext,IndexContextProvider}