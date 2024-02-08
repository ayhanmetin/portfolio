import React from 'react';
import Login from '../practiceLogin/Login';
import TestCasesPage from '../practiceLogin/TestLoginCase';

export default function LoginPage() {
  return (
    <>
      <div className='container bg-light-subtle rounded-4'>
        <h3 className='pb-4 mb-4 p-4 border-bottom text-center display-6 fw-bold text-body-emphasis'>
          Login Page Exercises
        </h3>
        <div className='d-flex flex-column mb-3'>
          <div className='text-center p-5'>
            <p>
              <p className='mx-auto fs-5 text' style={{ maxWidth: '800px' }}>
                Showcasing automated testing tools with corresponding GitHub
                repositories for:
              </p>
              <a
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main'
                className='btn btn-outline-dark m-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cypress
              </a>
              <a
                href='#'
                className='btn btn-outline-dark m-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                {/* Update your link here */}
                Selenium
              </a>
              <a
                href='#'
                className='btn btn-outline-dark m-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                {/* Update your link here */}
                Playwright
              </a>
              <div className='mt-4 p-2 m-2'>
                <p className='mb-1'>
                  For testing the login page, use the credentials provided
                  below:
                </p>
                <div
                  className='p-2 rounded mx-auto mt-3'
                  style={{ maxWidth: '400px', width: '100%' }}
                >
                  <p className='mb-1'>
                    <strong>Username:</strong> ayhan89
                  </p>
                  <p>
                    <strong>Password:</strong> ayhan123
                  </p>
                </div>
              </div>
            </p>
          </div>

          <div className='p-2 mt-0 pt-0 text-center'>
            <Login />
          </div>
          <div className='d-flex p-2 justify-content-center mt-0 pt-0'>
            <h3 className='p-2 mb-0 pb-0 text-center'>Test Cases</h3>
          </div>
          <div className='d-flex p-2 justify-content-center'>
            <TestCasesPage />
          </div>
        </div>
      </div>
    </>
  );
}
