import React from 'react';

export default function Skills() {
  return (
    <>
      <div className='container mt-5'>
        <div className='text-start mb-0 pt-2 ps-1 p-1'>
          <h2 className='fs-5 text-decoration-underline'>Technologies</h2>
        </div>
        <div className='d-flex flex-wrap gap-1 py-2 fs-5 text'>
          <span className='badge bg-dark border'>React</span>
          <span className='badge bg-dark border'>JavaScript</span>
          <span className='badge bg-dark border'>TypeScript</span>
          <span className='badge bg-dark border'>Redux</span>
          <span className='badge bg-dark border'>Next.js</span>
          <span className='badge bg-dark border'>Git</span>
          <span className='badge bg-dark border'>Python</span>
          <span className='badge bg-dark border'>SQL</span>
          <span className='badge bg-dark border'>PostgreSQL</span>
          <span className='badge bg-dark border'>Java</span>
          <span className='badge bg-dark border'>Node.js</span>
          <span className='badge bg-dark border'>Bootstrap</span>
          <span className='badge bg-dark border'>Tailwind</span>
          <span className='badge bg-dark border'>Docker</span>
        </div>
      </div>

      <div className='container mt-3 fs-5 text'>
        <div className='text-start mb-0 pt-2 ps-1 p-1'>
          <h2 className='fs-5 text-decoration-underline'>Testing Tools</h2>
        </div>
        <div className='d-flex flex-wrap gap-1 py-2'>
          <span className='badge bg-dark border'>Cypress</span>
          <span className='badge bg-dark border'>Selenium</span>
          <span className='badge bg-dark border'>Playwright</span>
          <span className='badge bg-dark border'>Jest</span>
          <span className='badge bg-dark border'>Pytest</span>
          <span className='badge bg-dark border'>Puppeteer</span>
          <span className='badge bg-dark border'>Postman</span>
          <span className='badge bg-dark border'>Jira</span>
          <span className='badge bg-dark border'>Testrail</span>
          <span className='badge bg-dark border'>Figma</span>
        </div>
      </div>

      <div className='container mt-3 fs-5 text'>
        <div className='text-start mb-0 pt-2  ps-1 p-1'>
          <h2 className='fs-5 text-decoration-underline'>Certificates</h2>
        </div>
        <div className='d-flex flex-wrap gap-1 py-2'>
          <span className='badge bg-dark border'>ISTQB® Foundation Level</span>
          <span className='badge bg-dark border'>PSM I, Scrum.org</span>
          <span className='badge bg-dark border'>Postman API Expert</span>
          <span className='badge bg-dark border'>
            Cypress End-to-End Testing
          </span>
        </div>
      </div>
    </>
  );
}
