import React from 'react';
import Login from '../practice/Login';
import TestCasesPage from '../practice/TestLoginCase';

export default function LoginPage() {
  return (
    <>
      <h3 className='pb-4 mb-4 border-bottom text-center'>
        Login Page Exercises
      </h3>
      <div className='container'>
        <div className='d-flex flex-column mb-3'>
          <div className='p-2'>
            <p
              className='p-2 text-center fw-light font-monospace'
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              Explore my login test practices, designed to demonstrate automated
              testing with tools such as Cypress, Selenium, and Playwright.
            </p>
            <p
              className='p-2 text-center mt-3 border-top border-bottom'
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              Find the <span className='fw-bold'>Github</span> repositories for
              <a
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main'
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
                Playwright.
              </a>{' '}
            </p>
            <div className='p-2 text-center mt-3 mb-0 pb-0 fw-normal'>
              For testing the login page, use the username and password provided
              below:
            </div>
            <div className='p-2 text-center mt-3 mb-0 pb-0'>
              <span className='fw-semibold'>Username:</span> ayhan89 <br />
              <span className='fw-semibold'>Password:</span> ayhan123
            </div>
          </div>
          <div className='p-2 text-center'>
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
