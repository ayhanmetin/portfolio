import React from 'react';
import Login from '../practiceLogin/Login';
import TestCasesPage from '../practiceLogin/TestLoginCase';
import TestGroup from '../practiceLogin/TestGroup';

export default function LoginPage() {
  return (
    <>
      <div className=''>
        <h3 className='pb-4 mb-4 p-4 text-center display-6 fw-bold text-body-emphasis'>
          Login Page Tests
        </h3>
        <div className='border border-warning-subtle shadow mt-5'>
          <div className='p-0 mt-0 text-center'>
            <Login />
          </div>
          <div className='mt-5 justify-content-center pt-0'>
            <TestGroup />
          </div>
          <div className='d-flex flex-column align-items-center mt-5'>
            <div
              className='text-center p-3'
              style={{ maxWidth: '700px', width: '100%' }}
            >
              <p className='mb-3' style={{ fontSize: '1.3rem' }}>
                All GitHub repositories containing login test examples:{' '}
              </p>
              <div className='d-flex justify-content-center pb-0 flex-wrap p-0 gap-3 mb-0'>
                <a
                  href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main'
                  className='btn btn-outline-primary mb-5'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Cypress
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
