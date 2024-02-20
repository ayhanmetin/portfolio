import React, { useState } from 'react';
import testCasesFile from './testCasesFile'; 

export default function TestGroup() {
  const [selectedTestCase, setSelectedTestCase] = useState(testCasesFile[0]);

  const handleClick = testCase => {
    setSelectedTestCase(testCase);
  };

  const boxStyle = {
    height: '380px',
    overflow: 'auto',
  };

  return (
    <div className='container justify-content-center py-5'>
      <div className='row d-flex justify-content-center g-3'>
        <div className='col-lg-3 col-md-4'>
          <div className='px-2 shadow' style={boxStyle}>
            <h2 className='text-center fs-3 mb-4'>Test Cases</h2>
            <div className='list-group gap-1'>
              {testCasesFile.map(testCase => (
                <div
                  key={testCase.id}
                  className={`list-group-item btn btn-outline-primary ${selectedTestCase.id === testCase.id ? 'active' : ''}`}
                  onClick={() => handleClick(testCase)}
                >
                  {testCase.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-8'>
          <div className='p-3 shadow' style={boxStyle}>
            <h3 className='text-center fs-4 mb-4'>{selectedTestCase.title}</h3>
            <ol className='list-group list-group-numbered'>
              {selectedTestCase.steps.map((step, index) => (
                <li key={index} className='list-group-item text-start'>
                  {step}
                </li>
              ))}
              <div className='mt-2 p-1 pt-2'>
                {selectedTestCase.links.map((link, index) => (
                  <div key={index} className='mb-1 ms-1'>
                    <a
                      href={link.gitHubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <li>» {link.name} Github Code</li>
                    </a>
                  </div>
                ))}
              </div>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
