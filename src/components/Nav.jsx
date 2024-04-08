import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import Profile from './Profile';
import ThemeIcon from './ThemeIcon';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Nav() {
  return (
    <>
      <div className='d-flex justify-content-end'>
        <nav className='nav'>
          <a
            href='mailto:ayhanmetinde@gmail.com'
            className='nav-link px-3'
            aria-label='E-mail'
          >
            <i className='fas fa-envelope text-secondary-emphasis'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/ayhanmet/'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link px-3'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin text-secondary-emphasis'></i>
          </a>
          <a
            href='https://github.com/ayhanmetin'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link px-3'
            aria-label='GitHub'
          >
            <i className='fab fa-github text-secondary-emphasis'></i>
          </a>
        </nav>
      </div>

      <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='mb-4 mt-3'>
          <Profile />
        </div>
        <div className='mt-3'>
          <ThemeIcon />
        </div>
      </div>
      <nav
        className='navbar navbar-expand-lg border-2 bg-dark fs-6 text border-bottom border-top border-body p-0 mt-4'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarTogglerDemo02'
          >
            <ul className='navbar-nav d-flex gap-3'>
              <li className='nav-item'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link hover-underline link-offset-2 text-warning'
                      : 'nav-link hover-underline link-offset-2 text-light'
                  }
                  to='/projects'
                >
                  Projects
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link hover-underline link-offset-2 text-warning'
                      : 'nav-link hover-underline link-offset-2 text-light'
                  }
                  to='/testing'
                >
                  Testing
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link hover-underline link-offset-2 text-warning'
                      : 'nav-link hover-underline link-offset-2 text-light'
                  }
                  to='/about'
                >
                  About Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
