import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestCasesPage = () => {
  const onMouseEnter = e => {
    e.currentTarget.classList.add('shadow-lg');
  };

  const onMouseLeave = e => {
    e.currentTarget.classList.remove('shadow-lg');
  };

  return (
    <div className='container test-cases-page my-5'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {/* Test Case 1 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 1
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Positive LogIn Test
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Type password 'marmarisfrankfurt' into Password field</li>
                <li>Push Submit button</li>
                <li>
                  Verify new page contains expected text "Login Successful! "
                </li>
                <li>Verify button 'Log out' is displayed on the new page</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Case 2 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 2
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Negative Username Test
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Type username 'incorrectUser' into Username field</li>
                <li>Type password 'marmarisfrankfurt' into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Your username is invalid!'
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Case 3 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 3
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Negative Password Test
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Type password 'incorrectPassword' into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Your password is invalid!'
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Case 4 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 4
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Username Field Validation
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Leave Username field empty</li>
                <li>Type password 'marmarisfrankfurt' into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Username and password cannot be
                  empty!'
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Case 5 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 5
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Password Field Validation
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Leave Password field empty</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Username and password cannot be
                  empty! '
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Case 6 */}
        <div className='col'>
          <div
            className='card h-100'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='card-body'>
              <p className='fs-6 font-monospace mb-1 text-center'>
                Test Case 6
              </p>
              <h5 className='card-title border-bottom mb-3 text-center'>
                Password Strength Test
              </h5>
              <ol className='card-text fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Type a weak password "1234" into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>Verify error message text is 'Password is too weak!'</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCasesPage;
