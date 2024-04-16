import {ID, Client, Storage, Databases} from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = Config.APPWRITE_PROJECT_ID;
const APPWRITE_BUCKET_ID = Config.APPWRITE_BUCKET_ID;

export class storage {
  databases;
  bucket;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.databases = new Databases(appwriteClient);
    this.bucket = new Storage(appwriteClient);
  }

  //file upload

  async fileUpload(uploadPdf) {
    try {
      await this.bucket.createFile(
        APPWRITE_BUCKET_ID,
         ID.unique(),
          uploadPdf
        );
    } catch (error) {
      console.log('error file upload!!');
    }
  }


  //delete file

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(APPWRITE_BUCKET_ID,fileId);
        console.log("file deleted");
        return true
        
    } catch (error) {
        console.log("delete file error" +error);
        
    }

  }
}

const storage = new Storage();
export default storage;
