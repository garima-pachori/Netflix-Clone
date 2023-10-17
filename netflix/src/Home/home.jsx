import React from 'react';
import "./home.css";
import Navbar from '../Components/Navbar/Navbar';
import Featured from '../Components/featured/Featured';


const home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movie"/>
    </div>
  )
}

export default home;