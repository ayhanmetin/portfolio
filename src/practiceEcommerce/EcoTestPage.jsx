import React, { useState } from 'react';
import ecoTestCase from './ecoTestCase'; // Importing test cases from ecoTestCase
import ecommerceGithub from '../images/e-commerce-github.png';

function EcoTestPage() {
  // Component name corrected to follow naming conventions
  const [selectedTestCase, setSelectedTestCase] = useState(ecoTestCase[0]); // Initialize with the first test case from ecoTestCase

  const handleClick = testCase => {
    setSelectedTestCase(testCase); // Update the selected test case on click
  };

  const boxStyle = {
    height: '420px',
    overflow: 'auto',
  };

  return (
    <div className='container justify-content-center py-4'>
      <h3 className='pb-3 mb-4 px-4 border-bottom text-center display-6 fw-bold text-body-emphasis'>
        E-commerce Website Tests
      </h3>
      <div className='d-flex justify-content-center mb-5'>
        <img
          style={{ width: '600px', height: '400px' }}
          src={ecommerceGithub}
          alt=''
        />
      </div>
      <div className='row d-flex justify-content-center g-3'>
        <div className='col-lg-3 col-md-4'>
          <div className='px-1 pt-3 shadow' style={boxStyle}>
            <h2 className='text-center fs-3 mb-4'>Test Cases</h2>
            <div className='list-group gap-1'>
              {ecoTestCase.map(testCase => (
                <button // Changed from div to button for semantic HTML and accessibility
                  key={testCase.id}
                  className={`list-group-item btn btn-outline-primary ${selectedTestCase.id === testCase.id ? 'active' : ''}`}
                  onClick={() => handleClick(testCase)}
                >
                  {testCase.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-8'>
          <div className='p-3 px-1 shadow' style={boxStyle}>
            <h3 className='text-center fs-4 mb-4'>{selectedTestCase.title}</h3>
            <div className='list-group list-group-numbered'>
              {selectedTestCase.steps.map((step, index) => (
                <li key={index} className='list-group-item text-start rounded'>
                  {step}
                </li>
              ))}
              <div className='mt-2 p-1 pt-2'>
                {selectedTestCase.links &&
                  selectedTestCase.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.gitHubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='d-block mb-1 ms-1' // Adjusted for proper link display
                    >
                      » {link.name} test codes
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center mt-5'>
          <div
            className='text-center p-3'
            style={{ maxWidth: '700px', width: '100%' }}
          >
            <p className='mb-3' style={{ fontSize: '1.5rem' }}>
              All GitHub repositories containing E-commerce website test
              examples:{' '}
            </p>
            <div className='d-flex justify-content-center pb-0 flex-wrap p-0 gap-3 mb-0'>
              <a
                href='https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation'
                className='btn btn-outline-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cypress
              </a>
              {/* <a
                href='#'
                className='btn btn-outline-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                Selenium
              </a>
              <a
                href='#'
                className='btn btn-outline-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                Playwright
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoTestPage; // Corrected export statement to export the component itself
