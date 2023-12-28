import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Writing from './components/Writing';
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Testing from './components/Testing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='container text-start mt-5'>
        <div className='row align-items-start'>
          <div className='col-2'>
            {' '}
            <Nav />
          </div>
          <div className='col-8'>
            {' '}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/testing' element={<Testing />} />
              <Route path='/writing' element={<Writing />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
