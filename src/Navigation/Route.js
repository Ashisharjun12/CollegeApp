import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { useContext } from 'react'
import AppwriteContext from '../Appwrite/AppwriteContex'

const Route = () => {

  const {isLoggedIn}=useContext(AppwriteContext)
  
  console.log(isLoggedIn)
 
  return (

<NavigationContainer>
 
    {true  ? (<AppStack/>) : (<AuthStack/>)}
   
</NavigationContainer>
   
  )
}

export default Route