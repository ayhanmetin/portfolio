import React from 'react';
import Login from '../practiceLogin/Login';
import TestCasesPage from '../practiceLogin/TestLoginCase';
import TestGroup from '../practiceLogin/TestGroup';

export default function LoginPage() {
  return (
    <>
      <div className=''>
        <div className='shadow mt-2'>
          <div className='p-0 mt-0 text-center'>
            <Login />
          </div>
          <div className='mt-5 justify-content-center pt-0'>
            <TestGroup />
          </div>
        </div>
      </div>
    </>
  );
}
