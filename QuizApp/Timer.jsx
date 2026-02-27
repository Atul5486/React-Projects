import { useState,useEffect } from 'react'
const Timer = ({setOver}) => {
    const [timer, setTimer] = useState(80);
    const [displayTimer, setDisplayTimer] = useState('');
    useEffect(()=>{
      let interval=  setInterval(()=>{
            setTimer(prev=>{
                if(prev<=0){
                    clearInterval(interval);
                    return 0;
                }
                return prev-1;
            });
        },1000)
    },[])
    useEffect(()=>{
      if(timer===0){
        setOver(true);
      }
     let time=`${(Math.floor(timer/60).toString()).padStart(2,0)} : ${(Math.floor(timer%60).toString()).padStart(2,0)}`;
     setDisplayTimer(time);
    },[timer,setOver])
  return (
    <div>
      <h1>⏰ Timer left : {displayTimer}</h1>
    </div>
  )
}

export default Timer
