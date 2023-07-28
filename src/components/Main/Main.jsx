import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
  return (
    <div className='main flex flex-col gap-20'>
        <Header />
        <div className='main flex flex-col gap-14 md:px-20 lg:px-40 px-10'>
        <MainHeader />
        <Outlet />
        </div>
    </div>
  )
}

export default Main