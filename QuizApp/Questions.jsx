import React, { useState } from 'react'
import questions from './question.json'

const Questions = ({setOver,setScore,score}) => {
    const [index,setIndex]=useState(0);
    
    function handleClick(select){
      if(select===questions[index].answer){
        setScore(prev=>prev+1);
        if(index < questions.length-1){
          setIndex(prev=>prev+1);
        }else{
          setOver(true);
              }  
        }else{
          if(index < questions.length-1){
          setIndex(prev=>prev+1);
        }else{
          setOver(true);
              }
        }
    }
  return (
    <div>
    <p>Current Score : {score}</p>
      <h1 className='my-4'>{questions[index].question}</h1>
      <div className='flex flex-col gap-2'>
        {
        questions[index].options.map((option)=>{
        return(
        <button key={option} onClick={()=>{handleClick(option)}}>{option}</button>
        )   
        })
        }
      </div>
    </div>
  )
}

export default Questions
