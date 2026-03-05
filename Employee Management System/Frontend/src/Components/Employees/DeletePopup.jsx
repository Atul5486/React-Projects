import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../../store/feature/popupSlice';
import { deleteEmployee } from '../../store/employee/employeeThunk';

const DeletePopup = () => {
  const dispatch=useDispatch();
   const popup=   useSelector(state=>state.popUpReducer.deletePopup);
    const handleConformation=async()=>{
    await dispatch(deleteEmployee(popup))
    dispatch(closeDeletePopup())
  }
  if(!popup) return null; 
  return (
     <div onClick={()=>dispatch(closeDeletePopup())} className="hero bg-black/50 min-h-screen fixed top-0 left-0 z-11">
      <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div onClick={(e)=>e.stopPropagation()} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<div className="card w-96 bg-base-100 card-xl shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Delete</h2>
    <p>Are you sure you want to delete this</p>
    <div className="justify-end card-actions mt-6">
      <button onClick={()=>dispatch(closeDeletePopup())} className="btn btn-primary">NO</button>
      <button onClick={()=>handleConformation()} className="btn btn-primary">YES</button>
    </div>
  </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeletePopup