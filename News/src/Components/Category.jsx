import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../Context/NewsContext'
const Category = () => {
    const category=["Business","Entertainment","General","Health","Science","Sports","Technology"]
      const {setNews,fetchNews}=useNewsContext();
    const handleClick=async(e)=>{
      const response=await fetchNews(`/everything?q=${e.target.value.toLowerCase()}`);
      setNews(response.articles)
    }
  return (
    <div className='sticky top-16 z-10 bg-base-200'>
    <Wrapper>
    <div className='max-w-full flex justify-center gap-2 items-center overflow-x-auto scrollbar-none p-6'>
        {category.map((item)=>(
        <div key={item}>
        <button onClick={handleClick} className="btn btn-primary" value={item}>{item}</button>
        </div>
        ))}
     </div>
    </Wrapper>
    </div>
  )
}

export default Category