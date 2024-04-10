import { View, Text } from 'react-native'
import React, { useState ,createContext} from 'react'

import Appwrite from './Service'




export const  AppwriteContex = createContext({
    appwrite : new Appwrite(),
    isLoggedIn:false,
    setIsLoggedIn :() =>{}

})

export const AppwriteProvider  = ({children}) => {
const [isLoggedIn ,setIsLoggedIn]=useState(false)
const defalutValue = {
    appwrite : new Appwrite(),
    isLoggedIn,
    setIsLoggedIn 
}

  return (
    <AppwriteContex.Provider value={defalutValue}>
      {children}
    </AppwriteContex.Provider>
  )
}

export default AppwriteContex