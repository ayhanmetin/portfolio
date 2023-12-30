import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Writing from './components/Writing';
import Portfolio from './components/Portfolio';
import Testing from './components/Testing';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <NavBar />
        </div>
      </div>

      <div className='row justify-content-center mb-5'>
        <div className='col-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/writing' element={<Writing />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='col-12'>
        </div>
      </div>
    </div>
  );
}

export default App;
