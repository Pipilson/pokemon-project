//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import RedBlue from './components/Box/RB_Box'
//import FireredLeafgreen from './components/Box/FRLG_Box'
import FRLG from './components/exclusives/FRLG'
import RB from './components/exclusives/RB'
//import ChangeSprites from './components/ChangeSprites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import GS from './components/exclusives/GS'
import FRLG_dex from './components/available/FRLG_dex'
import RBY_dex from './components/available/RBY_dex'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          {/* <Route path='/' element={home}></Route> */}
          <Route path='/rb' element={<RB></RB>}></Route>
          <Route path='/gs' element={<GS></GS>}></Route>
          <Route path='/frlg' element={<FRLG></FRLG>}></Route>
          <Route path="/xxx3r" element={<FRLG_dex></FRLG_dex>}></Route>
          <Route path="/xxx1" element={<RBY_dex></RBY_dex>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
