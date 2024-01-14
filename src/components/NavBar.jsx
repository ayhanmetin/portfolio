import React from 'react';
import './nav.css';
import ayhanPhoto from '../images/cv-photo.jpeg';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeIcon from './ThemeIcon';

export default function NavBar() {
  return (
    <>
      <header className='d-flex justify-content-between align-items-center ps-3 mb-5'>
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
      <nav className='navbar navbar-expand-lg bg-body-tertiary mb-5'>
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
            className='collapse navbar-collapse fs-7 text fw-medium'
            id='navbarNav'
          >
            <div className='navbar-nav'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/portfolio'>
                Portfolio
              </NavLink>
            </div>
            <div className='ms-auto link-hover'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/ayhanmet/'
                className='fs-7 text link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover me-3'
              >
                LinkedIn
              </a>
              <a
                target='_blank'
                href='https://github.com/ayhanmetin'
                className='fs-7 text link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover me-3'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
