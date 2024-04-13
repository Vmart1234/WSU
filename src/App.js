import "./index.css"
import "./App.css"
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authors from "./components/Authors/Authors";
import Vmart from './components/Authors/Vmart';
import Sabbir from './components/Authors/Sabbir';
import Hossain from './components/Authors/Hossain';
import Amran from './components/Authors/Amran';

import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
const client = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_ANON_KEY)

const App = () => {
  return (
    <Router>
      <Provider value={client}>
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
      </Provider> {/* Close the Provider component here */}
    </Router>
  );
}


export default App;