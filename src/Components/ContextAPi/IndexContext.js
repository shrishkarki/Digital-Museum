import React,{createContext, useState} from 'react';

const IndexContext=createContext();
const IndexContextProvider = ({children}) => {

    const [emailAddress,setEmailAddress]=useState("");
    const [token ,setToken]=useState("");

 
    return(
        <IndexContext.Provider value={{emailAddress,setEmailAddress,token,setToken}}>
            {children}
        </IndexContext.Provider>
    )
 
}

export  {IndexContext,IndexContextProvider}