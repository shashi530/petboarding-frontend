import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom';

export default function Routers() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route />
        </Routes>
      <Home />
    </div>
  )
}
