import React, { useEffect, useRef, useState } from 'react'

const Main = () => {
    const[password,setPassword]=useState('');
    const[length,setLength]=useState(8);
    const[isChar,setIsChar]=useState(false);
    const[isnumber,setIsnumber]=useState(false);
    const[savepassword,setSavePassword]=useState([]);

    const passRef=useRef(null);

    const generatepassword=()=>{
        let pass="";
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(isnumber) str+="0123456789"
        if(isChar) str+="`@!#$%^&*";

        for(let i=0;i<length;i++){
            let index=Math.floor(Math.random()*str.length);
            let character=str.charAt(index);
            pass+=character;
        }
        setPassword(pass)
    }
    const copyPassword=()=>{
        navigator.clipboard.writeText(password);
        passRef.current.select();
    }
    useEffect(() => {
        generatepassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length,isnumber,isChar])
    
  return (

    <div className='flex flex-col gap-5 m-auto max-w-[30rem]'>
        <h1>Password Generator</h1>
        <input ref={passRef} type='text' readOnly={true} placeholder='Password' value={password} className='outline-none bg-gray-200 text-black rounded-lg px-3 py-1'/>
      
    <label htmlFor='number'>
        <input type='checkbox' 
        checked={isnumber}
        id='number'
        onChange={(e)=>setIsnumber(e.target.checked)}
         />
         Number Allowed 
    </label>
    <label htmlFor='char'>
        <input type='checkbox' 
        checked={isChar}
        id='char'
        onChange={(e)=>setIsChar(e.target.checked)}
         />
         Character Allowed 
    </label>

        <input className='cursor-pointer' type='range' min={0} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
        <button className='bg-blue-500 px-3 py-2'
        onClick={()=>copyPassword()}>Copy Password</button>
        <button className='bg-blue-500 px-3 py-2' onClick={()=>{
            setSavePassword(prev=>([...prev,password]))
        }}
        >Save Password</button>
        <button className='bg-blue-500 px-3 py-2' onClick={()=>{
            setPassword('')
            setIsChar(false)
            setIsnumber(false)
            setLength(8)
            }}>Reset Password</button>
            <div className='flex wrap items-center gap-4 flex-wrap overflow-hidden pb-5'>

            {savepassword.map((item,i)=>{
                return(
                <p key={i}>{i+1}. {item}</p>
                )
            })}
            </div>
    </div>
  )
}

export default Main