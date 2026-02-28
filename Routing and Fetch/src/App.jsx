import React, { useContext } from 'react'
import GetImage from './components/GetImages'
import ToDoList from './components/ToDoList'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Tosatify from './components/Tosatify'
import { DataContext } from './components/contextApi'
const App = () => {
  const data=useContext(DataContext)
  return (
    
    <>
    <nav className='p-4 bg-emerald-300 text-2xl flex gap-10 items-center sticky top-0'>
    <NavLink className={(e)=>{return e.isActive?"text-red-300":""}}  to='/'>Home</NavLink>
    <NavLink className={(e)=>{return e.isActive?"text-red-300":""}} to='get-images'>Get Image</NavLink>
    <NavLink className={(e)=>{return e.isActive?"text-red-300":""}} to='todo'>Todo</NavLink>
    <NavLink className={(e)=>{return e.isActive?"text-red-300":""}} to='toast'>Tosatify</NavLink>
    </nav>
    <h1 className='text-3xl font-bold text-red-200'>{data}</h1>
    <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="get-images" element={<GetImage />} />
          <Route path="todo" element={<ToDoList use="TODO" />} />
          <Route path="toast" element={<Tosatify/>} />
          <Route path="user/:username" element={<GetImage/>} />
      </Routes>
    
    </>
  )
}

export default App