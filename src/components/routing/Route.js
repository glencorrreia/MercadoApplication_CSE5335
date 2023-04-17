import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginScreen from '../Login.js'
import Navbar from "../navbar/Navbar"


const Routing = () => {
    return (
      <div className='app'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default Routing
  
