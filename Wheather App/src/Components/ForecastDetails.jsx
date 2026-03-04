import React from 'react'
import { useSelector } from 'react-redux'

const ForecastDetails = () => {
    const {forecast,loading,error} =useSelector(state=>state.wheatherReducer)
    console.log(forecast,loading)
    if(error) return <p>Error...</p>
    if(!forecast) return null;
  return (
     <div>
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">4 Days Forecast</h2>
                    {
                        forecast.map((item,index)=>(
                            <p key={index}>Date: {item.dt_txt} - {(item.main.temp-273).toFixed(1)}°C</p>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default ForecastDetails