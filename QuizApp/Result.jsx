import React from 'react'

const Result = ({score,setScore,setOver}) => {
  return (
    <div>
      <h1 className='my-5'>Result</h1>
      <h1 >Your Score is {score}</h1>
      <button className='text-xl font-bold my-5' onClick={()=>{
        setScore(0);
        setOver(false);
      }}>Reset</button>
    </div>
  )
}

export default Result
