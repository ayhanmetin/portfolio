import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Writing from './components/Writing';
import TestingHub from './components/Testinghub';
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <div
        style={{ margin: '0', padding: '0', marginBottom: '10px' }}
        className='container'
      >
        <div className='row m-0'>
          <div className='col-2 pl-0 d-none d-xl-block m-0 p-0'>
            <Nav />
          </div>
          <div className='col-12 col-xl-8 align-self-right'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/testing' element={<TestingHub />} />
              <Route path='/writing' element={<Writing />} />

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
