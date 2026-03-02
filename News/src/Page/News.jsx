import React, { useEffect } from 'react'
import Wrapper from '../Components/Wrapper'
import { Meta } from 'react-router-dom'
import { useNewsContext } from '../Context/NewsContext'
import Loader from '../Components/Loader'
import { useState } from 'react'


const News = () => {
  const {news,setNews,fetchNews,loading}=useNewsContext();
  const [page,setPages]=useState(1);

  //load data on render
  useEffect(()=>{
    (async()=>{
      const data=await fetchNews(); 
      setNews(data.articles)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const selectPageHandler=(selectedPage)=>{
      if(selectedPage>=1 && selectedPage<=news.length/10 && selectedPage!=page){
        setPages(selectedPage);
      }
  }


  if(loading) return <Loader/>; 
  return (
    <Wrapper>
      <div className='grid grid-cols-4 gap-6 p-4'>
      {
        news.slice(page*10-10,page*10).map((item,index)=>(
        <NewsCard key={index} details={item}/>
        ))
      }
      </div>
      {
        <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...news].slice(0,news.length/10).map((_, i) => {
          return <span key={i} className={page === i + 1 ? "bg-blue-600" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < Math.floor(news.length / 10) ? "" : "pagination__disable"}>▶</span>
      </div>
      }
    </Wrapper>
  )
}
const NewsCard=({details})=>{
    return(
        <div className="card bg-base-200 shadow-sm">
  <figure>
    <img
      className='aspect-video object-cover w-full'
      src={details?.urlToImage ? details.urlToImage : "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{details?.title}</h2>
    <p className='line-clamp-3'>{details?.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open(details.url)} className="btn badge-outline curosr-pointer hover:btn-primary transition-all duration-300">Read More</button>
    </div>
  </div>
</div>
    )
}
export default News