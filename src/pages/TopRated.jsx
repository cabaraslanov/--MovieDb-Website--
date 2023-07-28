import React, { useEffect } from 'react'
import MainCard from '../components/Main/Cards/MainCard'
import { useParams } from 'react-router-dom'
import { boxVal } from '../store/feature/countertSlice'
import { useDispatch } from 'react-redux'


const TopRated = () => {
  const {name} = useParams()
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

export default TopRated