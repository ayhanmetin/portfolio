import React from 'react';
import cv from '../assets/cv.jpeg';

export default function () {
  return (
    <>
      <header
        className='d-flex justify-content-center align-items-center'
        style={{ height: '110px' }}
      >
        <div className='d-flex align-items-center'>
          <div className='me-2 mt-2'>
            <img
              src={cv}
              alt='Ayhan Metin'
              className='rounded-circle mt-2 shadow-lg'
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e =>
                (e.currentTarget.style.transform = 'scale(1.08)')
              }
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
          <div>
            <h1 className='mb-0 mt-4 fs-3 fw-normal '>Ayhan </h1>
            <h1 className='ms-2 fs-3 fw-normal'>Metin</h1>
          </div>
        </div>
      </header>
    </>
  );
}
