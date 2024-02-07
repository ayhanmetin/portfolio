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
    <div className='container py-5 pt-0'>
      <div className='row'>
        <div className='col-12 col-md-6 mx-auto'>
          <div className='card shadow-sm p-3 mb-5 bg-body rounded'>
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
