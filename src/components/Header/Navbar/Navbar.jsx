import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Bars from './Bars/Bars'

const Navbar = () => {
  return (
    <div className="navbar relative h-20 flex justify-between md:px-20 lg:px-40 px-10">
        <Logo />
        <Menu />
        <Bars />
    </div>
  )
}

export default Navbar