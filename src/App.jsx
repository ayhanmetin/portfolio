import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Test from './components/Test';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import LoginPage from './components/LoginPage';
import Ecommerce from './components/Ecommerce';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <Nav />
      <div className='container-xl mt-5 pb-5 flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/practice' element={<Test />} />
          <Route path='practice/ecommerce' element={<Ecommerce />} />
          <Route path='practice/loginpage' element={<LoginPage />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
