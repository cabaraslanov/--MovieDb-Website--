import React, { useEffect } from 'react'
import MainCard from '../components/Main/Cards/MainCard'
import { useDispatch, useSelector } from 'react-redux'
import { boxVal } from '../store/feature/countertSlice'

const Latest = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
      const Key = "07989e510be31f37e529531744bfc3ec";
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
    .then(resp=>resp.json())
    .then(data=>dispatch(boxVal(data)))


  },[])



  return (
      <>
        <MainCard /> 
      </>
  )
}

export default Latest