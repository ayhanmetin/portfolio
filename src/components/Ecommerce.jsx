import React from 'react';
import TestCaseECommerce from '../practiceEcommerce/TestCaseECommerce';

export default function Ecommerce() {
  return (
    <>
      <h3 className='pb-4 mb-4 border-bottom text-center'>
        E-commerce Website Exercises
        <div className='text-center fs-3 text'>Coming soon...</div>
      </h3>
      <div className='container'>
        <div className='d-flex flex-column mb-3'>
          <div className='p-2'>
            <p
              className='p-2 text-center fw-light font-monospace border-bottom'
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              Discover my e-commerce website test practices, showcasing
              automated testing tools. Find the corresponding{' '}
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
          </div>
        </div>
      </div>
      <div>
        <TestCaseECommerce />
      </div>
    </>
  );
}
