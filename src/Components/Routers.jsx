import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom';
import Create from './Create';
import Detail from './Detail';
export default function Routers() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/listing/create"} element={<Create />} />
            <Route path={"/listing/:id"} element={<Detail />} />
        </Routes>
    </div>
  )
}
