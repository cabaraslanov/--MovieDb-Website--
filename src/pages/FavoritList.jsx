import { Card } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Star from '../components/Main/Cards/Star/Star';
import { countHDecrement, setHeartFilter } from '../store/feature/countertSlice';
import Header from '../components/Header/Header';
import { AiFillHeart, AiOutlineTag } from 'react-icons/ai';

const FavoritList = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  const selector = useSelector(state=>state.counterData);
  const dispatch = useDispatch();
  // console.log(selector.cardMap);

 


  const favorit = (id)=>{

  dispatch(setHeartFilter(id))
  dispatch(countHDecrement())
  console.log(id)


  }

console.log(selector.cardMap);

  return (
    <>
    <Header />
        <div className="flex h-full flex-wrap justify-between  main mt-20 pb-20   gap-5 md:px-20 lg:px-40 px-10">
    {
      selector.cardMap.length > 0 ?
      (
      selector.cardMap?.map((item,index)=>{
        return(
          <div key={index} >
           
          <Card
            className="card p-2 border-none relative  "
            hoverable
            style={{ width: 250 }}
            cover={<NavLink to={`/details/${item.id}`}> <img alt="example" src={API_IMG + item.poster_path} /></NavLink>}
          >
            <div className="flex gap-28 absolute left-5 top-4 text-2xl text-orange-400">
              <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                <Star /> {item.vote_average}
              </div>

              <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
              <button  onClick={()=>favorit(item.id)}>
                    <AiFillHeart />
                    {/* {
                      selector.heartBoolean === true ? <AiFillHeart /> : <AiOutlineHeart  className="heartDiv" />
                    } */}
                    </button>
                </div>
            </div>

            <div className="flex justify-between align-middle pt-4">
              <div className="text-lg text-white">
                {item.title?.slice(0,20)}
              </div>
              <div className="flex text-2xl align-middle text-orange-400">
                <AiOutlineTag />
              </div>
            </div>
          </Card>
      </div>
        )
      })
      )
      :
      (
      <div className='favorite mx-auto h-screen text-4xl'>
        <p className='tracking-widest'>Your favoritlist is empty</p>
      </div>
      )
    }
    

{/* <div className='favorite h-screen text-4xl'>
        <p className='tracking-widest'>Your favoritlist is empty</p>
      </div> */}
    </div>
    </>

  )
}

export default FavoritList