import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import Grocery from './pages/grocery';
import Clothing from './pages/clothing';
import Cosmetics from './pages/cosmetics';
import HomeAppliances from './pages/homeAppliances';
import TechAppliances from './pages/techAppliances';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path="/grocery" element = {<Grocery/>}/>
          <Route path="/clothing" element = {<Clothing/>}/>
          <Route path="/cosmetics" element = {<Cosmetics/>}/>
          <Route path="/homeAppliances" element = {<HomeAppliances/>}/>
          <Route path="/techAppliances" element = {<TechAppliances/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;