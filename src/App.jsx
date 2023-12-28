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
      <div class='container text-start mt-5'>
        <div class='row align-items-start'>
          <div class='col-2'>
            {' '}
            <Nav />
          </div>
          <div class='col-8'>
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
