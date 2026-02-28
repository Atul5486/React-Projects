import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const GetImage = () => {
  const [image, setImage] = useState([])
  
  const handleclick= async ()=>{
    try{  
      let response=await axios.get("https://picsum.photos/v2/list")
    let data=response.data
    setImage(data)
    }catch(err){
      console.log(err)
    }
  }
const params = useParams()

  return (
    
    <div className='w-full h-full p-2'>
    <div className='text-2xl font-bold text-red-500'>
        <h1>Username: {params.username}</h1>
    </div>
    <button onClick={handleclick} className='p-4 bg-green-400 cursor-pointer rounded-2xl'>Get Images</button>
      <div>
  {
    image.map((elem,index)=>(
      <img key={index} src={elem.download_url} width={200} height={200} className='p-2 inline-block rounded-xl'/>
    ))

  }
      </div>
      
    </div>
  )
}

export default GetImage