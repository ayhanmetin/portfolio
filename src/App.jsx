import React from 'react';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className='container mt-2'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <NavBar />
        </div>
      </div>

      <div className='row justify-content-center mb-5'>
        <div className='col-12'>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='col-12'></div>
      </div>
    </div>
  );
}

export default App;
