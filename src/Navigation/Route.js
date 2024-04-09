import { View, Text} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'


const Route = () => {


  const [isLoggedIn ,SetIsLoggedIn]= useState(true)

 
  return (

<NavigationContainer>
 
    {isLoggedIn  ? (<AppStack/>) : (<AuthStack/>)}
   
</NavigationContainer>
   
  )
}

export default Route