import React, { useState } from 'react';
import testCasesFile from './testCasesFile';
import { Link, NavLink } from 'react-router-dom';

export default function TestGroup() {
  const [selectedTestCase, setSelectedTestCase] = useState(testCasesFile[0]);

  const handleClick = testCase => {
    setSelectedTestCase(testCase);
  };

  const boxStyle = {
    height: '420px',
    overflow: 'auto',
  };

  return (
    <div className='container py-5'>
      <div className='row g-4'>
        <div className='col-lg-4 col-md-4'>
          <div className='p-3 rounded-3 shadow' style={boxStyle}>
            <h2 className='text-center fs-3 mb-4'>Test Cases</h2>
            <div className='list-group gap-1'>
              {testCasesFile.map(testCase => (
                <div
                  key={testCase.id}
                  className={`list-group-item border btn btn-outline-primary ${selectedTestCase.id === testCase.id ? 'active' : ''}`}
                  onClick={() => handleClick(testCase)}
                >
                  {testCase.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-lg-5 col-md-8'>
          <div className='p-3 rounded-3 shadow' style={boxStyle}>
            <h3 className='text-center fs-4 mb-4'>{selectedTestCase.title}</h3>
            <ol className='list-group list-group-numbered'>
              {selectedTestCase.steps.map((step, index) => (
                <li
                  key={index}
                  className='list-group-item text-start'
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className='col-lg-3 col-md-4'>
          <div className='p-3 rounded-3 shadow' style={boxStyle}>
            <h3 className='text-center fs-4 mb-4'>GitHub Repositories</h3>
            <div className='d-flex flex-column gap-2'>
              {selectedTestCase.links.map((link, index) => (
                <Link
                  key={index}
                  target='_blank'
                  className='list-group border btn btn-outline-primary text-center flex-grow-1 overflow-auto list-group-item-action'
                  to={link.gitHubUrl}
                >
                  {link.name}
                  <span className='d-block small'>
                    {selectedTestCase.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
