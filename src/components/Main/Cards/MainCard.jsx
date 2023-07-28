import React, { useState } from "react";
import { Card } from "antd";
import Star from "./Star/Star";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  countH,
  countHDecrement,
  countTag,
  countTagDecrement,
  deletBoxValue,
  setCardMap,
  setHeartFilter,
  setTagFilter,
  setTagPage,
} from "../../../store/feature/countertSlice";
import {
  AiFillHeart,
  AiFillTag,
  AiOutlineHeart,
  AiOutlineTag,
} from "react-icons/ai";

// const { Meta } = Card;
const API_IMG = "https://image.tmdb.org/t/p/w500";

const MainCard = () => {
  const [numb, setNumb] = useState([]);

  // const [numbId,setNumbId] = useState()

  // fetch('https://api.themoviedb.org/3/discover/movie')
  // .then(resp=>console.log(resp))

  const selector = useSelector((state) => state.counterData);
  const dispatch = useDispatch();
  const cartHeart = selector.value.results;
  const mainCard = selector.boxValue.results;

  const tagCard = (id) => {
    let tagBox = selector.tagPage.find((item) => item.id === id);
    if (tagBox) {
      dispatch(setTagFilter(id));
      dispatch(countTagDecrement());
    } else {
      selector.boxValue.results?.map((item) => {
        if (item.id === id) {
          dispatch(setTagPage(item));
          dispatch(countTag());
        }
        return item;
      });

      cartHeart?.map((item) => {
        if (item.id === id) {
          dispatch(setTagPage(item));
          dispatch(countTag());
        }
        return item;
      });
    }
  };

  // const WatchH = useSelector(state => state.counterData.cardMap);

  // const storedMovieH = WatchH.find(item=>item.id === numb);
  // const watchlistDisabledH = storedMovieH ? true : false;

  const cardId = (id) => {
    const favoriteBoxes = selector.cardMap?.find((item) => item.id === id);

    if (favoriteBoxes) {
      console.log("box artiq elave edilib");
      dispatch(setHeartFilter(id));
      dispatch(countHDecrement());
    } else {
      mainCard?.map((item) => {
        if (item.id === id) {
          dispatch(setCardMap(item));
          dispatch(countH());
          setNumb(item.id);
        }
        return item;
      });

      cartHeart?.map((item) => {
        if (item.id === id) {
          console.log(item.id);
          dispatch(setCardMap(item));
          dispatch(countH());
        }
        return item;
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {
        // Search codes
        cartHeart ?
           cartHeart?.map((item, index) => {
            {console.log(item);}


              return (
                <div key={index}>
                  {
                    item.poster_path !== null ? 
                    <Card
                    className="card p-2 border-none relative"
                    hoverable
                    style={{ width: 250 }}
                    cover={
                      <NavLink to={`/details/${item.id}`}>
                        {" "}
                        <img alt="example" src={API_IMG + item.poster_path} />
                      </NavLink>
                    }
                  >
                    <div className="flex gap-28 absolute left-5 top-4 text-2xl text-orange-400">
                      <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                        <Star />
                        {item?.vote_average}
                      </div>

                      <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                      <button className="z-0" onClick={() => cardId(item.id)}>
                          {selector.cardMap?.find((x) => x.id === item.id) ? (
                            <AiFillHeart className="AiFillHeart " />
                          ) : (
                            <AiOutlineHeart className="heartDiv" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between align-middle pt-4">
                      <div className="text-lg text-white">
                        {item.title.slice(0, 20)}
                      </div>
                      <div className="flex text-2xl align-middle text-orange-400">
                      <button onClick={() => tagCard(item.id)}>
                          {selector.tagPage.find((x) => x.id === item.id) ? (
                            <AiFillTag className="AiFillHeart" />
                          ) : (
                            <AiOutlineTag />
                          )}
                        </button>
                      </div>
                    </div>
                  </Card>
                  :
                  null
                  }

                </div>
              );
            })
            
          : mainCard?.map((item, id) => {
              return (
                <div key={id}>
                  <Card
                    className="card p-2 border-none relative  "
                    hoverable
                    style={{ width: 250 }}
                    cover={
                      <NavLink to={`/details/${item.id}`}>
                        {" "}
                        <img alt="example" src={API_IMG + item.poster_path} />
                      </NavLink>
                    }
                  >
                    <div className="flex gap-28 absolute left-5 top-4 text-2xl text-orange-400">
                      <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                        <Star /> {item.vote_average}
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                        {/* <Heart className="heartDiv" onClick={()=>cardId(item.id)}/> */}

                        <button className="z-0" onClick={() => cardId(item.id)}>
                          {selector.cardMap?.find((x) => x.id === item.id) ? (
                            <AiFillHeart className="AiFillHeart " />
                          ) : (
                            <AiOutlineHeart className="heartDiv" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between align-middle pt-4">
                      <div className="text-lg text-white">
                        {item.title.slice(0, 20)}
                      </div>
                      <div className="flex text-2xl align-middle text-orange-400">
                        <button onClick={() => tagCard(item.id)}>
                          {selector.tagPage.find((x) => x.id === item.id) ? (
                            <AiFillTag className="AiFillHeart" />
                          ) : (
                            <AiOutlineTag />
                          )}
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })
      }
    </div>
  );
};

export default MainCard;
