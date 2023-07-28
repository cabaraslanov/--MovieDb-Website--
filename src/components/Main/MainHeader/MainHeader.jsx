import React from "react";
import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { dataSaved } from "../../../store/feature/countertSlice";

const { Search } = Input;


const MainHeader = () => {
  const movies = useSelector(state=>state.counterData.value)
  const dispatch = useDispatch()

// const onSearch = (value)=>{
// fetch(`https:api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`)
// .then(resp=>resp.json())
// .then(data=>dispatch(dataSaved(data)))
// .catch(err=>console.log(err))
//   }

  const onSearch = async(value) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(value);
    if(data.results === undefined || data.results === ""){
      dispatch(dataSaved(movies))
    }else{dispatch(dataSaved(data))}
  }

  return (
    <div className="MainHeader flex flex-col gap-6 main ">
      <h1 className="text-6xl font-bold">MovieDB</h1>
      <p className="text-gray-300">
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </p>

       <Search className='search' placeholder=" search movie" onSearch={onSearch} enterButton />

      <p className="text-gray-400 font-bold text-3xl">All(120)</p>

    </div>


  );
};

export default MainHeader;
