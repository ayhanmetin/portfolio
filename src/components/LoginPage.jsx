import React from 'react';
import Login from '../practiceLogin/Login';
import TestCasesPage from '../practiceLogin/TestLoginCase';

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
              className='p-2 text-center fw-light font-monospace border-bottom'
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              Discover my login test practices, showcasing automated testing
              tools. Find the corresponding{' '}
              <span className='text-decoration-underline'>GitHub</span>{' '}
              repositories for{' '}
              <a
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main'
                className='mx-1 link-underline-primary underline-opacity-25 link-underline-opacity-100-hover'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cypress,
              </a>
              <a
                href=''
                className='mx-1 link-underline-primary underline-opacity-25 link-underline-opacity-100-hover'
                target='_blank'
                rel='noopener noreferrer'
              >
                Selenium,
              </a>
              and
              <a
                href=''
                className='mx-1 link-underline-primary underline-opacity-25 link-underline-opacity-100-hover'
                target='_blank'
                rel='noopener noreferrer'
              >
                Playwright.
              </a>
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
