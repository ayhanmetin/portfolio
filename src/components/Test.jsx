import React from 'react';
import loginpage from '../images/loginpage.png';
import ecommerce from '../images/ecommerce.png';
import { Link } from 'react-router-dom';
import './test.css';

export default function Test() {
  return (
    <>
      <div className='container mb-2 pb-3 pt-0'>
        <div className='container col-xxl-8 px-4 py-5 pt-4'>
          {/* Login Page Section */}
          <div className='row align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <Link to='/testing/loginpage' target='_blank'>
                <img
                  src={loginpage}
                  style={{
                    width: '320px',
                    height: '320px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className='d-block mx-lg-auto img-fluid img-thumbnail p-2 rounded shadow'
                  alt='Login Page'
                  loading='lazy'
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow =
                      '0 0 10px rgba(0, 0, 0, 0.25)';
                  }}
                />
              </Link>
            </div>
            <div className='col-lg-6'>
              <Link
                to='/testing/loginpage'
                className='text-decoration-none'
                target='_blank'
              >
                <h1 className='display-5 fw-bold text-body mb-4 lh-1 mb-3'>
                  Login Page
                </h1>
              </Link>
              <p className='lead'>
                I developed a simple login page, along with test cases for
                automated testing using well-known tools. You can access the
                page through this{' '}
                <Link
                  target='_blank'
                  to='/testing/loginpage'
                  className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                >
                  link.
                </Link>
                <br />
                <br />
                Explore the GitHub repositories and code below:
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <a
                  href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-primary text-secondary-emphasis btn-sm px-4 me-md-2 text-secondary-emphasis'
                >
                  Cypress
                </a>
                <button
                  type='button'
                  className='btn btn-outline-primary text-secondary-emphasis btn-sm px-4 me-md-2'
                >
                  Selenium
                </button>
                <button
                  type='button'
                  className='btn btn-outline-primary text-secondary-emphasis btn-sm px-4 me-md-2'
                >
                  Playwright
                </button>
              </div>
            </div>
          </div>
          {/* E-commerce Section */}
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <Link to='/testing/ecommerce' target='_blank'>
                <img
                  src={ecommerce}
                  style={{
                    width: '320px',
                    height: '320px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className='d-block mx-lg-auto img-fluid img-thumbnail p-2 rounded shadow'
                  alt='E-commerce'
                  loading='lazy'
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow =
                      '0 0 10px rgba(0, 0, 0, 0.25)';
                  }}
                />
              </Link>
            </div>
            <div className='col-lg-6'>
              <Link
                className='text-decoration-none'
                to='/testing/ecommerce'
                target='_blank'
              >
                <h1 className='display-5 fw-bold text-body-emphasis mb-4 lh-1 mb-3'>
                  E-Commerce
                </h1>
              </Link>
              <p className='lead'>
                I developed an e-commerce page for my frontend program's final
                project, which serves as a demo available via this{' '}
                <a
                  href='https://ayhando.vercel.app/'
                  className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                  target='_blank'
                >
                  link.
                </a>
                <br />
                <br />
                Additionally, I created test cases and automated them using
                popular test tools, explore the GitHub repositories and code
                below:
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <a
                  href='https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation'
                  className='btn btn-outline-primary text-secondary-emphasis btn-sm px-4 me-md-2'
                  target='_blank'
                  role='button'
                >
                  Cypress
                </a>
                <button
                  type='button'
                  className='btn btn-outline-primary text-secondary-emphasis btn-sm px-4 me-md-2'
                  target='_blank'
                >
                  Selenium
                </button>
                <button
                  type='button'
                  className='btn btn-outline-primary text-secondary-emphasis  btn-sm px-4 me-md-2'
                  target='_blank'
                >
                  Playwright
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
