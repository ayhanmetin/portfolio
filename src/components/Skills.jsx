import React from 'react';

export default function Skills() {
  return (
    <>
      <div className='container mt-5'>
        <div className='text-start mb-0 pt-2 ps-1 p-1'>
          <h2 className='fs-5 fw-semibold text-decoration-underline '>
            Technologies
          </h2>
        </div>
        <div className='d-flex flex-wrap gap-2 py-4 fs-4 text'>
          <span className='badge bg-dark border border-primary'>React</span>
          <span className='badge bg-dark border border-primary'>
            Javascript
          </span>
          <span className='badge bg-dark border border-primary'>
            Typescript
          </span>
          <span className='badge bg-dark border border-primary'>Git</span>
          <span className='badge bg-dark border border-primary'>Python</span>
          <span className='badge bg-dark border border-primary'>SQL</span>
          <span className='badge bg-dark border border-primary'>Java</span>
          <span className='badge bg-dark border border-primary'>Bootstrap</span>
          <span className='badge bg-dark border border-primary'>Dockers</span>
          <span className='badge bg-dark border border-primary'>Figma</span>
        </div>
      </div>

      <div className='container mt-3 fs-4 text'>
        <div className='text-start mb-0 pt-2 ps-1 p-1'>
          <h2 className='fs-5 fw-semibold text-decoration-underline'>
            Testing Tools
          </h2>
        </div>
        <div className='d-flex flex-wrap gap-2 py-4'>
          <span className='badge bg-dark border border-primary'>Cypress</span>
          <span className='badge bg-dark border border-primary'>Selenium</span>
          <span className='badge bg-dark border border-primary'>
            Playwright
          </span>
          <span className='badge bg-dark border border-primary'>Jest</span>
          <span className='badge bg-dark border border-primary'>Pytest</span>
          <span className='badge bg-dark border border-primary'>Puppeteer</span>
          <span className='badge bg-dark border border-primary'>Postman</span>
          <span className='badge bg-dark border border-primary'>Jira</span>
          <span className='badge bg-dark border border-primary'>Testrail</span>
        </div>
      </div>

      <div className='container mt-3 fs-4 text'>
        <div className='text-start mb-0 pt-2  ps-1 p-1'>
          <h2 className='fs-5 fw-semibold text-decoration-underline'>
            Certificates
          </h2>
        </div>
        <div className='d-flex flex-wrap gap-2 py-4'>
          <span className='badge bg-dark border border-primary'>
            ISTQB® Foundation Level
          </span>
          <span className='badge bg-dark border border-primary'>
            PSM I, Scrum.org
          </span>
          <span className='badge bg-dark border border-primary'>
            Postman API Expert
          </span>
          <span className='badge bg-dark border border-primary'>
            Cypress End-to-End Testing
          </span>
        </div>
      </div>
    </>
  );
}
