import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Tosatify = () => {
    const successToast =()=>{
        return toast('✅ Login SuccessFully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
// transition: Bounce,
});
    }
  return (

    <div>
        <button onClick={successToast}>Login</button>
        <ToastContainer/>
    </div>
  )
}

export default Tosatify