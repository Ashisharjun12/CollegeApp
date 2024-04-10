import {ID ,Account ,Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const appwriteClient = new Client()

const APPWRITE_ENDPOINT  = Config.APPWRITE_ENDPOINT
const APPWRITE_PROJECT_ID  =Config.APPWRITE_PROJECT_ID



class AppwriteService {
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)

    }


    //create user inside appwrite

    async createAccount({email ,password,name}
       ){
            try {
              const userAccount = await this.account.create(
                    ID.unique(),
                    email,
                    password,
                    name
                )
                if (userAccount) {

                    //login feature
                    return this.login({email,password})
                    
                }else{
                    return userAccount
                }
                
            } catch (error) {
                Snackbar.show({
                    text:String(error),
                    duration:Snackbar.LENGTH_LONG
                })
                console.log("Appwrite Service :: createAccount()::"+error)
                
            }
        }

        async login({email ,password}){
            try {
               return  await this.account.createEmailPasswordSession(email,password)
                
            } catch (error) {
                Snackbar.show({
                    text:String(error),
                    duration:Snackbar.LENGTH_LONG
                })
                console.log("Appwrite Service :: loginAccount()::"+error)
                
            }
        }

        async getCurrentUser(){
            try {
              return await  this.account.get()
            } catch (error) {
                console.log("Appwrite Service :: getCurrentUser()::"+error)
                
            }
        }

        async logout(){
            try {
                return await this.account.deleteSessions('Current')
            } catch (error) {
                console.log("Appwrite Service :: logoutAccount()::"+error)

                
            }
        }
}

export default AppwriteService