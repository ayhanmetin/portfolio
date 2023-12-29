import React from 'react';
import './nav.css';
import ayhanPhoto from '../images/cv-photo.jpeg';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeIcon from './ThemeIcon';

export default function NavBar() {
  return (
    <>
      <header className='d-flex justify-content-between align-items-center border-start border-5 border-primary ps-3 mb-5'>
        <div className='d-flex align-items-center'>
          <div className='me-3'>
            <img
              src={ayhanPhoto}
              alt='Ayhan Metin'
              className='rounded-circle mt-2'
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h1 className='mb-0 mt-4 fs-3 fw-light'>Ayhan</h1>
            <h1 className='ms-2 fs-3 fw-light'>Metin</h1>
          </div>
        </div>
        <div>
          <ThemeIcon />
        </div>
      </header>
      <nav className='navbar navbar-expand-lg bg-body-tertiary mb-3 '>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse fs-5 text fw-medium'
            id='navbarNav'
          >
            <div className='navbar-nav'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                home
              </NavLink>
              <NavLink className='nav-link' to='/portfolio'>
                portfolio
              </NavLink>
              <NavLink className='nav-link' to='/testing'>
                testing
              </NavLink>
              <NavLink className='nav-link' to='/writing'>
                writings
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
