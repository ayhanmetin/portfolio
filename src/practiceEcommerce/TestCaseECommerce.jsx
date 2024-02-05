import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestCaseECommerce = () => {
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
              <ol className='card-text mb-0 fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Type password 'ayhan123' into Password field</li>
                <li>Push Submit button</li>
                <li>
                  Verify new page contains expected text "Login Successful! "
                </li>
                <li>Verify button 'Log out' is displayed on the page</li>
              </ol>
            </div>
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Positive_Login_Test.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
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
              <ol className='card-text mb-0 fs-6'>
                <li>Open page</li>
                <li>Type username 'incorrectUser' into Username field</li>
                <li>Type password 'ayhan123' into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Your username is invalid!'
                </li>
              </ol>
            </div>
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Username_%20Test.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
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
              <ol className='card-text mb-0 fs-6'>
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
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Password_Test.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
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
              <ol className='card-text mb-0 fs-6'>
                <li>Open page</li>
                <li>Leave Username field empty</li>
                <li>Type password 'ayhan123' into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>
                  Verify error message text is 'Username and password cannot be
                  empty!'
                </li>
              </ol>
            </div>
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Username_Field_Validation.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
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
              <ol className='card-text mb-0 fs-6'>
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
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Field_Validation.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
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
              <ol className='card-text mb-0 fs-6'>
                <li>Open page</li>
                <li>Type username 'ayhan89' into Username field</li>
                <li>Type a weak password "1234" into Password field</li>
                <li>Push Submit button</li>
                <li>Verify error message is displayed</li>
                <li>Verify error message text is 'Password is too weak!'</li>
              </ol>
            </div>
            <div className='text-center fs-7 fw-medium text-primary font-monospace'>
              Go to code
            </div>
            <div className='d-flex justify-content-center mt-0 mb-2'>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Field_Validation.cy.js'
              >
                Cypress
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Selenium
              </a>
              <a
                className='mt-4 ms-2 p-0 shadow-sm text_center link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                target='_blank'
                href=''
              >
                Playwright
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCaseECommerce;
