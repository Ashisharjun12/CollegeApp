import React from "react"
import AppwriteService from '../Appwrite/AppwriteAuth'
import AppwriteContext from '../Appwrite/AppwriteContex'
import { useState } from "react"

const AppwriteProvider=({children})=>{
   const[isLoggedIn,setIsLoggedIn]=useState(false)
   const[currentuserinfo,setCurrentuserinfo]=useState({})
   const defaultValue={
       appwrite:new AppwriteService(), 
       isLoggedIn,
       currentuserinfo,
       setCurrentuserinfo,
       setIsLoggedIn
        
   }
   return(
       <AppwriteContext.Provider value={defaultValue}>
       {children}
       </AppwriteContext.Provider>
   )
}

export default AppwriteProvider