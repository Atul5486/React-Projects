import React from 'react'
import Home from './components/Home'
import Loader from './components/Loading'
const App = () => {
  return (
    <div className='flex min-h-screen flex-col bg-gray-100 items-center p-4
    justify-center'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>AI Image Enhancer("")</h1>
        <p></p>
      </div>
      <Home/>
      
      <div className='text-sm text-gray-500 mt-6'>
        Powered By @SheriyansAI
      </div>
    </div>
  )
}

export default App
