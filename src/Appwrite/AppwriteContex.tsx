import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, useState } from 'react'

import Appwrite from './Service'


type AppContexType={
    appwrite :Appwrite;
    isLoggedIn:boolean;
    setIsLoggedIn :(isLoggedIn:boolean) =>void
}

export const  AppwriteContex = createContex<AppContexType>({
    appwrite : new Appwrite();
    isLoggedIn:false;
    setIsLoggedIn :() =>{}

})

export const AppwriteProvider : FC<PropsWithChildren> = ({children}) => {
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