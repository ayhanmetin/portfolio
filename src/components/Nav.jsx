import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import Profile from './Profile';
import ThemeIcon from './ThemeIcon';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Nav() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center gap-5'>
        <div></div>
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
                      ? 'nav-link hover-underline text-warning'
                      : 'nav-link hover-underline text-light'
                  }
                  to='/'
                >
                  HOME
                </NavLink>
              </li>
              <div className='d-flex justify-content-start'>
                <div className='btn-group custom-btn-group'>
                  <button
                    type='button'
                    className='btn btn-dark dropdown-toggle custom-dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    TESTING
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'dropdown-item navlink-active'
                            : 'dropdown-item'
                        }
                        to='/testing'
                      >
                        Test Projects
                      </NavLink>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'dropdown-item navlink-active'
                            : 'dropdown-item'
                        }
                        to='testing/loginpage'
                      >
                        Login Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'dropdown-item navlink-active'
                            : 'dropdown-item'
                        }
                        to='testing/ecommerce'
                      >
                        E-commerce
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <li className='nav-item'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link hover-underline text-warning'
                      : 'nav-link hover-underline text-light'
                  }
                  to='/projects'
                >
                  PROJECTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
