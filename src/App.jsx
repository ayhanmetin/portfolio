import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Test from './components/Test';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <Nav />
      <div className='container-xl mt-5 pb-5 flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/testing' element={<Test />} />
          <Route path='testing/loginpage' element={<LoginPage />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
