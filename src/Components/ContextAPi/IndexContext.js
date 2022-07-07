import React,{createContext, useState} from 'react';

const IndexContext=createContext();
const IndexContextProvider = ({children}) => {

    const [emailAddress,setEmailAddress]=useState("");
    const [resetToken ,setResetToken]=useState("");

 
    return(
        <IndexContext.Provider value={{emailAddress,setEmailAddress,resetToken,setResetToken}}>
            {children}
        </IndexContext.Provider>
    )
 
}

export  {IndexContext,IndexContextProvider}