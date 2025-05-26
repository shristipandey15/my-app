
import React from 'react'
import Course from './Course'
import Banner from '../Components/Banner.jsx';
import Testominal from '../Components/Testominal.jsx';
import Events from '../Components/Events.jsx';
import Brands from '../Components/Brands.jsx';


// import About from '../Components/About';


const Home = () => {
  return (
    <div>
      
      {/* <About/> */}
    
      <Course/>
      <Banner/>
      <Testominal/>
      <Events/>
      <Brands/>
    </div>
  )
}

export default Home
