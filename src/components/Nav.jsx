import React from 'react';
import './nav.css';
import ayhanPhoto from '../images/cv-photo.jpeg';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <>
      <header className='d-flex align-items-center border-start border-5 border-primary ps-3 mb-5'>
        <div className='me-3'>
          <img
            src={ayhanPhoto}
            alt='Ayhan Metin'
            className='rounded-circle mt-2'
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1 className='mb-0 mt-4 fs-3 fw-light '>Ayhan</h1>
          <h1 className='ms-2 fs-3 fw-light'>Metin</h1>
        </div>
      </header>
      <div className='list-group list-group-flush p-0 m-0'>
        <NavLink
          className='list-group-item list-group-item-action p-1 ps-2'
          aria-current='true'
          to='/'
        >
          home
        </NavLink>
        <NavLink
          className='list-group-item list-group-item-action p-1 ps-2'
          to='/portfolio'
        >
          portfolio
        </NavLink>
        <NavLink
          className='list-group-item list-group-item-action p-1 ps-2'
          to='/testing'
        >
          testing
        </NavLink>
        <NavLink
          className='list-group-item list-group-item-action p-1 ps-2'
          to='/writing'
        >
          writings
        </NavLink>
      </div>
      <div className='contact-info ms-2 p-0 mt-4 mb-0'>
        <p className='custom-list-item mb-2 mb-2'>
          <a
            href='mailto:ayhanmetinde@gmail.com'
            target='_blank'
            className='text-decoration-underline text-reset link-hover'
          >
            e-mail
          </a>
        </p>
        <p className='custom-list-item mb-2 mb-2'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/ayhanmet/'
            className='text-decoration-underline text-reset link-hover'
          >
            linkedin
          </a>
        </p>
        <p className='custom-list-item mb-2 mb-2'>
          <a
            target='_blank'
            href='https://github.com/ayhanmetin'
            className='text-decoration-underline text-reset link-hover'
          >
            github
          </a>
        </p>
      </div>
    </>
  );
}
