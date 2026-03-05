import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../store/employee/employeeThunk';
import Layout from './Layout/Layout';
import Loader from './Loader';

const Highlighted = () => {
  const employees=useSelector(state=>state.employees.employees);
  const loader=useSelector(state=>state.employees.loading)

const filteredEmployees = employees.filter((d) => d.highlight);

console.log(filteredEmployees)
  if(loader) return <Loader/>


  if(employees.length==0) return <h1 className='text-center'>No User Found</h1>
  return (
    <Layout>
    <h1 className='text-center'>Filtered Employees</h1>
   <ul className="list bg-base-100 rounded-box shadow-md">
   {
    filteredEmployees.map((details,index)=>(
    <EmployeeCard key={index} details={details}/>
    ))
   }
</ul>
</Layout>
  )
}
const EmployeeCard=({details})=>{
  const dispatch=useDispatch();
  const handleHighlight=async (details)=>{
   await dispatch(updateEmployee({
      _id:details._id,
      details:{
        ...details,
      highlight:!details.highlight
      }
    }))
  }
  return(
    <li className="list-row">
    <div><img className="size-10 rounded-box" src={details.profileUrl}/></div>
    <div>
      <div>{details.name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{details.email}</div>
    </div>
    <p className="list-col-wrap text-xs">
      {details.bio}
       </p>
    <button onClick={()=>handleHighlight(details)} className="btn btn-square btn-ghost">
      <svg className="size-[1.4em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill={details.highlight? 'currentColor':'none'} stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  )
}
export default Highlighted