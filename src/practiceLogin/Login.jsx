import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setErrorMessage('');
    setShowErrorMessage(false);
    setSuccessMessage('');
    setShowSuccessMessage(false);

    if (!username || !password) {
      setErrorMessage('Username and password cannot be empty!');
      setShowErrorMessage(true);
    } else if (username !== 'ayhan89') {
      setErrorMessage('Your username is invalid!');
      setShowErrorMessage(true);
    } else if (password.length < 8) {
      setErrorMessage('Password is too weak!');
      setShowErrorMessage(true);
    } else if (password !== 'ayhan123') {
      setErrorMessage('Your password is invalid!');
      setShowErrorMessage(true);
    } else {
      setSuccessMessage('Login Successful!');
      setShowSuccessMessage(true);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setSuccessMessage('');
    setShowSuccessMessage(false);
  };

  return (
    <div className='container pt-4 pt-0'>
      <div className='col d-flex justify-content-center'>
        <div className='justify-content-center'>
          <h3 className='fw-bold mb-3 fs-4 mt-5'>Login details below:</h3>
          <p className='mb-2'>
            <strong>Username:</strong> ayhan89
          </p>
          <p>
            <strong>Password:</strong> ayhan123
          </p>
          <p>
            <a
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
              target='_blank'
              rel='noopener noreferrer'
              className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-8 col-md-6 mx-auto'>
          <div className='card shadow-sm p-1 mb-1 bg-body rounded'>
            <div className='card-body'>
              <h1 className='h3 mb-3 fw-normal text-center'></h1>
              {showErrorMessage && (
                <div className='alert alert-danger' role='alert'>
                  {errorMessage}
                </div>
              )}
              {!isLoggedIn ? (
                <>
                  {showSuccessMessage && (
                    <div className='alert alert-success' role='alert'>
                      {successMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingUsername'
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      <label htmlFor='floatingUsername'>Username</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        id='floatingPassword'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label htmlFor='floatingPassword'>Password</label>
                    </div>
                    <button
                      className='btn btn-lg btn-primary w-100'
                      type='submit'
                    >
                      Sign in
                    </button>
                  </form>
                </>
              ) : (
                <button
                  className='btn btn-lg btn-secondary w-100'
                  onClick={handleLogout}
                >
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
