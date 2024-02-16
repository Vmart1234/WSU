import "./index.css"
import "./App.css"
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authors from "./pages/Authors";
import Vmart from './pages/Vmart';
import Sabbir from './pages/Sabbir';
import Hossain from './pages/Hossain';
import Amran from './pages/Amran';
const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path='/vmart' element={<Vmart/>} />
          <Route path='/sabbir' element={<Sabbir/>} />
          <Route path='/hossain' element={<Hossain/>} />
          <Route path='/amran' element={<Amran />} />
        </Routes>
        
      </Fragment>
    </Router>
  );
}

export default App;