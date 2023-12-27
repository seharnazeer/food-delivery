import {ref,uploadBytesResumable,getDownloadURL,refFromUrl,deleteObject} from "firebase/storage"
import storage from "../firebase/config";
const handleUpload =async ({ target: { files } },collection,url) => {
  return new Promise(async(resolve,reject)=>{
    if(url!==''){
      const result=await deletePhoto(url)
     }
     console.log(collection)
     const refstorage = ref(storage, `${collection}/${Date.now()}-${files[0].name}`);
     const upload = uploadBytesResumable(refstorage, files[0]);
   
   upload.on("state_changed", (snapshot) => {
     }, (error) => {
      
         reject("error")
     }, async() => {
         await getDownloadURL(upload.snapshot.ref).then(async downloadURL => {
          if(downloadURL !== undefined){
            resolve(downloadURL)
          }
         })
     })
  })
  
}
const deletePhoto=async (url)=>{
  const desertRef = ref(storage, `${url}`);

// Delete the file
deleteObject(desertRef).then(() => {
  // File deleted successfully
  return true
}).catch((error) => {
  // Uh-oh, an error occurred!
  console.log(error)
});
}
deletePhoto()
export default handleUpload