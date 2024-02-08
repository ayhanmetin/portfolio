import React from 'react';
import TestCaseECommerce from '../practiceEcommerce/TestCaseECommerce';

export default function Ecommerce() {
  return (
    <>
      <h3 className='container mb-5 pb-5 bg-light-subtle rounded-4 pt-4'>
        E-commerce Website Exercises
        <div className='text-center fs-3 text'>Coming soon...</div>
      </h3>
      <div className='container'>
        <div className='text-center mt-3'>
          <p className='mx-auto' style={{ maxWidth: '800px' }}>
            Showcasing automated testing tools with corresponding GitHub
            repositories for:
          </p>
          <p>
            <a
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main'
              className='btn btn-link link-warning text-body-emphasis link-offset-3 fw-semibold'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cypress
            </a>
            <a
              href='#'
              className='btn btn-link link-warning text-body-emphasis link-offset-3 fw-semibold'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              {/* Update your link here */}
              Selenium
            </a>
            <a
              href='#'
              className='btn btn-link link-warning text-body-emphasis link-offset-3 fw-semibold'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              {/* Update your link here */}
              Playwright
            </a>
          </p>
        </div>
      </div>
      <div>
        <TestCaseECommerce />
      </div>
    </>
  );
}
