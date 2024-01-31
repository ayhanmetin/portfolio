import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Test from './components/Test';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ToDo from './components/ToDo';
import LoginPage from './components/LoginPage';
import Ecommerce from './components/Ecommerce';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <Nav />
      <div className='container-xl my-5 pb-5 flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/practice' element={<Test />} />
          <Route path='practice/ecommerce' element={<Ecommerce />} />
          <Route path='practice/loginpage' element={<LoginPage />} />
          <Route path='practice/todolist' element={<ToDo />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
