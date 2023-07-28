import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../../../store/feature/countertSlice'
import { Link } from 'react-router-dom'


const Bars = () => {
  const selector = useSelector(state=>state.counterData)
  const dispatch = useDispatch()
  
  return (
    <Link className={`burger-icon ${selector.barsToggle ? "active" : ""}`}  onClick={()=>dispatch(toggleMenu(selector.barsToggle))}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </Link>


  )
}

export default Bars