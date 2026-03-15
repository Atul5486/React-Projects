import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageApi } from '../utils/enhanceImageApi'

const Home = () => {
 const[uploadImage,setUploadImage]= useState(null);
 const[enhancedImage,setEnhancedImage]= useState(null);
 const[loading,setLoading]=useState(false)

 const uploadImagehandler=async (file)=>{
  setUploadImage(URL.createObjectURL(file))
  setLoading(true)
  try{
    const enhancedImageUrl=await enhancedImageApi(file);
    setEnhancedImage(enhancedImageUrl); 
    setLoading(false);
  }catch(err){
    console.log(err);
    alert('Something went wrong ! Please try later');
  }
 }
 
 return (
    <>
      <ImageUpload uploadImagehandler={uploadImagehandler}/>  
      <ImagePreview loading={loading} enhanced={enhancedImage} uploaded={uploadImage}/>
    </>
  )
}

export default Home
Home