import React, { useState } from 'react'

const ToDoList = (props) => {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask,setMainTask]=useState([])
    const submitHandler =(e)=>{
        e.preventDefault()
       console.log([...mainTask,{title,desc}])
        setMainTask([...mainTask,{title,desc}])
        settitle("")
        setdesc("")
    }
    const deleteHandler=(i)=>{
        let copytask=[...mainTask]
        copytask.splice(i,1)
        setMainTask(copytask)
    }
    let renderTask=<h2>No task Available</h2>
    if(mainTask.length > 0){
        renderTask=mainTask.map((t,i)=>{
        return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex justify-between items-center  w-2/3 text-3xl'>
            <h5>{t.title}</h5>
            <p>{t.desc}</p>
        </div>
        <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 rounded p-2 cursor-pointer'>
            Delete
        </button>
        </li>
    })
    }
  return (
      <>
    <h1 className='p-2  bg-zinc-500 text-center'>My Todo List</h1>
    <form onSubmit={submitHandler}>
        <input type='text'
        placeholder="Enter Task Here" 
        className='p-2 rounded-2xl m-2 border-white border'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        required
        />
    <input type='text' placeholder="Enter Description Here" className='p-2 rounded-2xl m-2 border-white border' value={desc}
        onChange={(e)=>setdesc(e.target.value)} required/>
    <button className='text-black text-2xl font-bold p-2 bg-white rounded-2xl m-5 cursor-pointer'>Add Here</button>
    </form>
    <hr/>
    <div className='p-5'>
        {
            <ul>{renderTask}</ul>
        }
    </div>
    {props.use}
    </>
      
  )
}

export default ToDoList