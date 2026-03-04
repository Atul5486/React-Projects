import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setCity } from '../actions/weatherAction';
const Search = () => {
    const dispatch=useDispatch();
    const city=useSelector(state=>state.wheatherReducer.city);
    const handleInput=(e)=>{
        dispatch(setCity(e.target.value))
    }
    const handleSearch=()=>{
        dispatch(fetchWeather(city))
    }
  return (
    <div className='join sticky top-26 z-10 bg-green-100'>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='outline-none border-none' type="search" value={city} required placeholder="Search" 
    onChange={handleInput}
  />
</label>
<button onClick={handleSearch} className="btn btn-info join-item">Search</button>
    </div>
  )
}

export default Search