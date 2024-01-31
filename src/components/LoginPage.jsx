import React from 'react';
import Login from '../practice/Login';
import TestCasesPage from '../practice/TestLoginCase';

export default function LoginPage() {
  return (
    <div className='container'>
      <div className='d-flex flex-column mb-3'>
        <div className='p-2'>
          <h2 className='p-2 text-center'>Login Page</h2>
          <p
            className='p-2 text-center fw-medium'
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Explore the Login Test Practice Showcase, designed for demonstrating
            automated testing with tools like Cypress, Selenium, and Playwright.
          </p>
          <p
            className='p-2 text-center border-bottom'
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Github repositories for
            <a
              href=''
              className='text-decoration-none mx-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cypress
            </a>
            ,
            <a
              href=''
              className='text-decoration-none mx-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Selenium
            </a>
            , and
            <a
              href=''
              className='text-decoration-none mx-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Playwright
            </a>
          </p>
          <div className='p-2 text-center mt-3 mb-0 pb-0 fw-semibold'>
            Testing login page I used password and username below
            <br />
          </div>
          <div className='p-2 text-center mt-3 mb-0 pb-0'>
            Username: ayhan89 <br />
            Password: marmarisfrankfurt
          </div>
        </div>
        <div className='p-2 text-center'>
          <Login />
        </div>
        <div className='d-flex p-2 justify-content-center mt-0 pt-0'>
          <h3 className='p-2 mb-0 pb-0 text-center'>Test Cases for Practice</h3>
        </div>
        <div className='d-flex p-2 justify-content-center'>
          <TestCasesPage />
        </div>
      </div>
    </div>
  );
}
