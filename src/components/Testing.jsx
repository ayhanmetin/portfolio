import React from 'react';
import './gradient.css';
import githubTesting from '../githubTesting';

function Testing() {
  return (
    <>
      <div className='container'>
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-3 border-start ps-3 mb-5 p-1 border-5 border-primary'>
            “Quality is never an accident; it is always the result of intelligent effort.” – <i>John Ruskin.</i>
          </p>
        </header>
        <div className='mt-2 text-with-gradient'></div>
        <div className='container ms-3 p-1 mt-4'>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            {githubTesting.map((test, index) => (
              <div key={index} className='col mb-4 px-1'>
                <div className='custom-square-card'>
                  <div className='card-body p-2'>
                    <h6 className='card-subtitle p-2 text-muted'>
                      {test.title}
                    </h6>
                    <p className='card-text mt-1'>
                      {test.text} » 
                      <a target='_blank' rel='noopener noreferrer' href={test.githubLink} className='card-link'>
                        github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
