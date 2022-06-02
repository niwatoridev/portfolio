import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import MainSec from './components/MainSec/MainSec'
import InfoCard from './components/InfoCard/InfoCard'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'
import {Heading} from '@chakra-ui/react'
import homeIcon from "./images/icons/home.png"

function App() {
  return (

  <div className="App-header">
    <Routes>
      <Route path='/' element={<MainSec/>}/>
      <Route path='info' element={<InfoCard/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
    </Routes>
    <div className="part3">
            <Heading size='2xl' id="nameFull"> 
                Esteban Munoz
            </Heading>
            <Heading size='xs' id="alias"> 
                esmunozdev
            </Heading>
            <Link to="/"><img src={homeIcon} alt='home-icon' className='homeIcon'/></Link>
        </div>
  </div>
  );
}




export default App;
