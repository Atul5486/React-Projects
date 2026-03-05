import React, { useEffect, useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import Employess from './Components/Employees/Employess'
import EmployeeForm from './Components/Employees/EmployeeForm'
import DeletePopup from './Components/Employees/DeletePopup'
import { useDispatch } from 'react-redux'
import { getEmployee } from './store/employee/employeeThunk'
import Highlighted from './Components/Highlighted'

const App = () => {
  const dispatch=useDispatch();
  const [highlight,setHighlight]=useState(false);
  useEffect(() => {
    dispatch(getEmployee())
  }, [dispatch])


  return (
    <div className='min-h-screen w-full flex flex-col main'>
      <EmployeeForm/>
      <DeletePopup/>
      <Navbar high={highlight} sethigh={setHighlight}/>
      <div className='flex-1 bg-base-100 p-4'>
        {
          !highlight ? <Employess/> :  <Highlighted/>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default App