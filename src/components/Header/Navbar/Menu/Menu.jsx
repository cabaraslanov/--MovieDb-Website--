import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";

const Menu = () => {
  const selector = useSelector((state) => state.counterData);

  return (
    <div className="menu ">
      <ul className={selector.barsToggle ? "menuResp" : "menuResp2"}>
        <li className="menuItem">
          <NavLink  activeclassname="active" to="/">
            Latest
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/nowPlaying/now_playing/">
            Now Playing
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/popular/popular" >
            Popular
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/topRated/top_rated" >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="/upComing/upcoming" className="menuItem">
            Upcoming
          </NavLink>
        </li>
        <li className="heart relative">
          <Link to="/favoriteList">
            <AiOutlineHeart />
            {
              selector.cardMap.length > 0 ? <div className="favouriteCount">{selector.countHeart}</div> : <div></div>
            }
          </Link>
        </li>
        <li className="heart relative">
          <Link to="/tagList">
            <AiOutlineTag />
            {
              selector.tagPage.length > 0 ? <div className="favouriteCount">{selector.countTag}</div> : <div></div>
            }
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
