import React, { useEffect, useState } from "react";
import Star from "../../components/Main/Cards/Star/Star";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";


const DetailMovie = ({ dataa }) => {
  const { id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500"

  const [dataDetails, setDataDetails] = useState("")
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07989e510be31f37e529531744bfc3ec&language=en-US`)
    .then(resp=>resp.json())
    .then(data=>setDataDetails(data))
  },[id])

  let backdrop = `https://image.tmdb.org/t/p/original/${dataDetails.backdrop_path}`;

  return (

    <>
    <Header />
      <div className="lg:px-40 px-20 mt-10">
        <div className="detailHeader relative ">
          <div className="movieImgDiv">
            <img className="movieImg" src={backdrop} />
          </div>
          <div className="imgTitle absolute">
            <p className="text-purple-200">{dataDetails.tagline}</p>
            <h2 className="md:text-2xl text-xl text-gray-50">
              {dataDetails.title}
            </h2>
          </div>
        </div>
        <div className="detailMain  mt-20 flex flex-col lg:flex-row align-middle justify-center gap-10 w-3/5 lg:w-11/12 mx-auto">
          <div className="leftImg w-full">
            <img className="w-full movieImg" src={API_IMG+dataDetails?.poster_path} />
          </div>
          <div className="imgDetails flex flex-col gap-5">
            <div className="imgDetailsTop flex flex-col gap-4">
              <h2 className="text-3xl text-gray-50">
                Part of the journey is the end.
              </h2>
              <p className="text-gray-300">
              {dataDetails.overview}
              </p>

              <div className="flex gap-28  left-5 top-4 text-2xl text-orange-400">
                <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                  <Star /> {dataDetails.vote_average}
                </div>
              </div>

              <div className="flex gap-5  left-5 top-4 text-2xl text-orange-400">
                <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                  <AiOutlineHeart />
                </div>
                <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                  <AiOutlineTag />
                </div>
              </div>
            </div>

            <div className="imgDetailsBottom flex flex-col gap-4">
              <p className="text-gray-400">Type</p>
              <p className="text-gray-100">Movie</p>
              <p className="text-gray-400">Relase Date:</p>
              <p className="text-gray-100">{dataDetails.release_date}</p>
              <p className="text-gray-400">Run time</p>
              <p className="text-gray-100">{dataDetails.runtime}</p>
              <p className="text-gray-400">Genres</p>
              <p className="text-gray-100">
                Adventure, Sciense Fiction, Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
