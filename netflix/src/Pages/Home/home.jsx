import React from 'react';
import "./home.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/featured/Featured';
import List from '../../Components/List/List';

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default home;