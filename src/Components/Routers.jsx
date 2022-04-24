import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom';

export default function Routers() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
            {/* <Route path={"/listing/create"} element={<Create />} />
            <Route path={"/:id"} element={<Detail />} /> */}
        </Routes>
      <Home />
    </div>
  )
}
