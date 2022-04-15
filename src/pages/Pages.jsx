import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import {Route,Routes,useLocation} from 'react-router-dom'
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  let location =useLocation()
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
            <Route path='/searched/:search' element={<Searched/>}></Route>
            <Route path='recipe/:name'element={<Recipe/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages