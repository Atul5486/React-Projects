import React, { Children, createContext, useContext } from 'react'
import { useState } from 'react';
import api from '../Config/axios';

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news,setNews]=useState([]);
    const [loading,setLoding]=useState(false);

    const fetchNews=async (url="/everything?q=india")=>{
        setLoding(true);
        try{
            const response=await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setLoding(false);
            return response.data;
        }catch(error){
            console.log(error);
            setLoding(false);
        }
  }
    const value={
        news,
        setNews,
        fetchNews,
        loading
    }
    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext=()=>{
    return useContext(NewsContext)
}
// eslint-disable-next-line react-refresh/only-export-components
export {NewsContextProvider,useNewsContext};