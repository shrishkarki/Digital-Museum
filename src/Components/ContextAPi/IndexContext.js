import React,{createContext, useState} from 'react';

const IndexContext=createContext();
const IndexContextProvider = ({children}) => {

    const [emailAddress,setEmailAddress]=useState("");
    const [resetToken ,setResetToken]=useState("");
    const [loading, setLoading]=useState(true);
    const [auth, setAuth]=useState("");

 
    return(
        <IndexContext.Provider value={{emailAddress,setEmailAddress,resetToken,setResetToken,loading, setLoading, auth, setAuth}}>
            {children}
        </IndexContext.Provider>
    )
 
}

export  {IndexContext,IndexContextProvider}