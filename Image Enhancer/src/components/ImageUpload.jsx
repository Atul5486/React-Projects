import React from 'react'

const ImageUpload = (props) => {

  const showImageHandler=(e)=>{
    const file=e.target.files[0];
    props.uploadImagehandler(file)
  }

  return (
    <div className='bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl'>
    <label htmlFor='fileInput'
    className='text-center hover:border-blue-500 block w-full rounded-lg cursor-pointer border-2 border-dashed border-gray-300 p-4 transition-all duration-300'
    >
      <input type='file' id="fileInput" className='hidden'
      onChange={showImageHandler}
      />
      <p className='text-black'>Click and Drag to upload your image</p>
    </label>
    </div>
  )
}

export default ImageUpload