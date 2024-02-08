import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className='text-center'>Page Not Found</div>
      <button
        className='d-flex align-items-center justify-content-center mx-auto btn btn-primary mt-3 btn-sm'
        onClick={() => navigate('/')}
      >
        Go to Home Page
      </button>
    </>
  );
}
