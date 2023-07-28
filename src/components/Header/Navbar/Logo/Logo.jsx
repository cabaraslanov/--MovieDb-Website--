import React from 'react';
import logo1 from "../../../../assets/icons/Vector.png"
import logo2 from "../../../../assets/icons/Vector2.png"
import { Link, NavLink } from 'react-router-dom';



const Logo = () => {
  return (
    <Link to="/">
      <div className="logo relative cursor-pointer">
        <img className='' src={logo2}></img>
        <img className='absolute top-0' src={logo1}></img>
    </div>
    </Link>

  )
}

export default Logo