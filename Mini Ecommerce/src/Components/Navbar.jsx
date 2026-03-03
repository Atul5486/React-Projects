import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex items-center text-2xl bg-gray-700 gap-16 p-3'>
      <img width={80} src={logo} />
        <Menu to={'/'} title={'Home'}/>
        <Menu to={'/products'} title={'Products'}/>
    </div>
  )
}
const Menu=({to,title})=>{
  return(
    <NavLink className={({isActive})=>isActive ? 'text-[tomato]':''} to={to}>{title}</NavLink>
  )
}
export default Navbar