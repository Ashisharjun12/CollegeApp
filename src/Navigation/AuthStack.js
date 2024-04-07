import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

const Stack=createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
         <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
   
 </Stack.Navigator>
  )
}

export default AuthStack