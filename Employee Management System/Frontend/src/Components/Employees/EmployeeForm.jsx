import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {closeEmployeePopup} from '../../store/feature/popupSlice'
import {postEmployee, updateEmployee} from '../../store/employee/employeeThunk'


const EmployeeForm = () => {

const popup=   useSelector(state=>state.popUpReducer.employeePopup);
const dispatch=useDispatch();
  const [fromDetails, setFromDetails] = useState({
    profileUrl:'',
    name:'',
    email:'',
    bio:'',
    highlight:false
  })
  const handleFormData=(e)=>{
    const {name,value}=e.target;
    setFromDetails({
      ...fromDetails,
      [name]:value
    })
  }

  const handleSubmit=async()=>{
    if(popup._id){
      await dispatch(updateEmployee({
        _id:popup._id,
        details:fromDetails 
      }))
    }else{
      await dispatch(postEmployee(fromDetails))
    }
    dispatch(closeEmployeePopup());
  }
  useEffect(()=>{
    if(!popup){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFromDetails({
        profileUrl:'',
        name:'',
        email:'',
        bio:'',
      })
    }else if(popup._id){
      console.log(popup.bio)
     setFromDetails({
        profileUrl:popup.profileUrl,
        name:popup.name,
        email:popup.email,
        bio:popup.bio,
      })
    }
  },[popup])
  if(!popup) return null;
  return (
    <div onClick={()=>dispatch(closeEmployeePopup())} className="hero bg-black/50 min-h-screen fixed top-0 left-0 z-11">
  <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
    <div onClick={(e)=>e.stopPropagation()} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className='text-xl ml-2'>Employee Details</h3>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Profile Url</label>
          <input value={fromDetails.profileUrl} onChange={handleFormData} name="profileUrl" type="text" className="input" placeholder="Profile Url" />
          <label className="label">Name</label>
          <input value={fromDetails.name} onChange={handleFormData} name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input value={fromDetails.email} onChange={handleFormData} name="email" type="text" className="input" placeholder="Email" />
          <fieldset className="fieldset">
          <legend className="fieldset-legend">Your bio</legend>
          <textarea value={fromDetails.bio} onChange={handleFormData} name="bio" className="textarea h-24" placeholder="Bio"></textarea>
        </fieldset>
          <button onClick={handleSubmit} className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default EmployeeForm