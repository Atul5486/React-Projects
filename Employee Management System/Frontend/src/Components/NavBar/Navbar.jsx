import React from 'react'
import Layout from '../Layout/Layout'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {openEmployeePopup} from '../../store/feature/popupSlice'
const Navbar = ({high,sethigh}) => {
  const dispatch=useDispatch();
  const handlePopup=()=>{
    dispatch(openEmployeePopup());
  }
  return (
    <div className='bg-base-100 sticky z-10 top-0'>
      <Layout>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Employees</a>
  </div>
  <div className="navbar-end">
    <button onClick={handlePopup} className="btn btn-ghost btn-circle">
      <FaPlus className='text-xl'/>
     </button>
    <button onClick={()=>sethigh(prev=>!prev)} className="btn btn-ghost btn-circle">
      <div className="indicator">
          <svg className="size-[1.6em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill={high ? 'currentColor':'none'} stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </div>
    </button>
  </div>
</div>
    </Layout>
    </div>
  )
}

export default Navbar