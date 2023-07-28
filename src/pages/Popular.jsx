import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainCard from '../components/Main/Cards/MainCard';
import { boxVal } from '../store/feature/countertSlice'
import { useDispatch, useSelector } from 'react-redux';

const Popular = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500"



  const {name} = useParams()
  

  const selector = useSelector(state=>state.counterData);
  const dispatch = useDispatch()
  
    useEffect(()=>{
        const Key = "07989e510be31f37e529531744bfc3ec";
  
    fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
      .then(resp=>resp.json())
      .then(data=>dispatch(boxVal(data)))
  
  
    },[])
  
    return (
      <>
        <MainCard/>
      </>
    )
}

export default Popular