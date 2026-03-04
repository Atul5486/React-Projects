import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WHEATHER_ERROR, FETCH_WHEATHER_PENDING, SET_CITY } from '../constants/wheatherConstans'
import axios from 'axios'
 const API_KEY=import.meta.env.VITE_WEATHER_API;
export const fetchWeatherPending=()=>{
    return{
        type:FETCH_WHEATHER_PENDING,
    }
}
export const fetchCurrentSuccess=(data)=>{
    return{
        type:FETCH_CURRENT_SUCCESS,
        payload:data,
    }
}
export const fetchForecastSuccess=(data)=>{
    return{
        type:FETCH_FORECAST_SUCCESS,
        payload:data
    }
}

export const fetchWeatheError=(error)=>{
    return{
        type:FETCH_WHEATHER_ERROR,
        payload:error,
    }
}
export const setCity=(city)=>{
    return{
        type:SET_CITY,
        payload:city
    }
}
export const fetchWeather=(city="indore")=>{
    return async(dispatch)=>{
        dispatch(fetchWeatherPending())
        try{
        const currentWheather=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const forecast=await axios.get(`https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        dispatch(fetchCurrentSuccess(currentWheather.data))
        dispatch(fetchForecastSuccess(forecast.data.list))
        }catch(err){
            console.log(err);
            dispatch(fetchWeatheError('Something went wrong'))
        }
    }
}