import React from 'react'
 import Home from '../pages/Home';
import About from '../pages/About';
import SingleRecipi from '../pages/SingleRecipi';
import Recipi from '../pages/Recipi';
import { Route, Routes } from 'react-router-dom'
import Create from '../pages/Create';
const Mainroute = () => {
  return (
   <Routes >
  <Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/recipi" element={<Recipi/>} />
<Route path="/recipi/detail/:id" element={<SingleRecipi/>} />
<Route path="/create-recipi" element={<Create/>} />
   </Routes>
  )
}

export default Mainroute
