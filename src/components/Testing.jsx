import React from 'react';
import './gradient.css';
import githubTesting from '../githubTesting';

function Testing() {
  return (
    <>
      <div className='container'>
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-3 ps-1 mb-4 p-1 fs-6 text'>
            “Quality is never an accident; it is always the result of
            intelligent effort.” – <i>John Ruskin.</i>
          </p>
        </header>
        <hr className='featurette-divider mb-3'></hr>
        <div className='container ms-3 p-1 mt-4'>
          <div className='row row-cols-1 row-cols-md-5 g-4'>
            {githubTesting.map((test, index) => (
              <div key={index} className='col mb-4 px-1'>
                <div className='custom-square-card'>
                  <div className='card-body p-2'>
                    <h6 className='card-subtitle p-1 text-muted fs-6 text'>
                      {test.title}
                    </h6>
                    <p className='card-text mt-1'>
                      {test.text} » &nbsp;
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={test.githubLink}
                        className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                      >
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
