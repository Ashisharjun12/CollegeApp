
import React, { useState ,createContext} from 'react'

import Appwrite from './Service'



export const  AppwriteContex = createContext({
    appwrite : new Appwrite(),
    isLoggedIn:true,
    
    setIsLoggedIn :() =>{},
    selectImg:'',
    setSelectImg:()=>{}

    

})





export const profileProvider = createContext({
  

})

export const AppwriteProvider  = ({children}) => {
const [isLoggedIn ,setIsLoggedIn]=useState(false)
const [selectImg, setSelectImg] = useState('');
const defalutValue = {
    appwrite : new Appwrite(),
    isLoggedIn,
    setIsLoggedIn,
    selectImg,
    setSelectImg 
}

  return (
    <AppwriteContex.Provider value={defalutValue}>
      {children}
    </AppwriteContex.Provider>
  )
}

export default AppwriteContex