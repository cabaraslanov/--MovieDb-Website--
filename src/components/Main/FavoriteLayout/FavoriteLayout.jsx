import  Header  from '../../Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const FavoriteLayout = () => {
  return (
    <div>
    <Outlet />
    </div>
  )
}

export default FavoriteLayout