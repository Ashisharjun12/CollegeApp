import { View, Text} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import Loading from '../Common/Loading'

import {AppwriteContex} from '../Appwrite/AppwriteContex'



const Route = () => {



  const [ isLoding ,setIsLoading] = useState(true)

  const {appwrite ,isLoggedIn ,setIsLoggedIn} = useContext(AppwriteContex)


  useEffect(()=>{
    appwrite
      .getCurrentUser()
      .then(response =>{
        setIsLoading(false)
        if (response) {
          setIsLoggedIn(true)
          
        }
      }).catch(_ =>{
        setIsLoading(false)
        setIsLoggedIn(false)
      })
      
    

  },[ appwrite ,setIsLoggedIn])

  if (isLoding) {
    return <Loading/>
    
  }

 
  return (

<NavigationContainer>
 
    {isLoggedIn  ? (<AppStack/>) : (<AuthStack/>)}
   
</NavigationContainer>
   
  )
}

export default Route