/* eslint-disable react-hooks/set-state-in-effect */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(true);

  const [page,setPage]=useState(1);

  const productsData= async ()=>{
    setLoading(true)
    const response =await axios.get("https://fakestoreapi.com/products")
    setProducts(response.data);
    setLoading(false)

  }  
  const selectPageHandler=(selectedPage)=>{
    if(selectedPage >=1 && selectedPage<products.length && selectedPage!=page){
      setPage(selectedPage)
    }
  }

  useEffect(()=>{
    productsData();
  },[])
  if(loading) return <Loader/>
  return (
    <>

    <div className='grid grid-cols-4 gap-4 p-6 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1'>
    {products.slice(page*6-6,page*6).map((item,index)=>{
      return(
        <ProductCard key={index} item={item}/>
      )
    })}
    </div>
    {
        <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...products].slice(0,Math.floor(products.length/6)).map((_, i) => {
          return <span key={i} className={page === i + 1 ? "bg-blue-600" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < Math.floor(products.length / 6) ? "" : "pagination__disable"}>▶</span>
      </div>
    }
    </>
  )
}

const ProductCard=({item})=>{
  const navigate=useNavigate();
  return(
    (
      <div onClick={()=>navigate(`/products/${item.id}`)} className='bg-gray-700 rounded-lg group cursor-pointer'>
      <img className='aspect-square object-contain p-4 group-hover:scale-120 transition-all duration-300' src={item.image} />
      <div className='p-5'>
        <h1 className='text-2xl line-clamp-2 group-hover:text-blue-500'>{item.title}</h1>
        <div className='flex items-center gap-3 my-3'>
          <p className='bg-green-600 w-fit px-4 py-1 rounded-lg text-center'>⭐{item.rating.rate}</p>
          <p>{item.rating.count}</p>
        </div>
        <p className='text-xl font-medium text-white/70'>{item.price} Rs</p>
      </div>
      </div>
    ))
}

export default Products