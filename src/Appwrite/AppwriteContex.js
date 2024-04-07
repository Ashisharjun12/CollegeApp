import AppwriteService from '../Appwrite/AppwriteAuth';
import { createContext } from "react";


export const AppwriteContext=createContext({
    //making obj of type class AppwriteService
    appwrite:new AppwriteService(), 
    isLoggedIn:false,
    currentuserinfo:'',
    setCurrentuserinfo:()=>{},
    setIsLoggedIn:()=>{}
})



export default AppwriteContext;