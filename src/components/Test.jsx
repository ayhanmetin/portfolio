import React from 'react';
import loginpage from '../images/loginpage.png';
import ecommerce from '../images/ecommerce.png';
import todolist from '../images/todolist.png';
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <>
      <div className='container mb-5 pb-5 pt-4'>
        <h3 className='pb-4 mb-4 border-bottom text-center '>
          My Test Projects Portfolio
        </h3>{' '}
        <div className='container col-xxl-8 px-4 py-5 pt-4'>
          {/* Login Page Section */}
          <div className='row align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <Link to='/practice/loginpage' target='_blank'>
                <img
                  src={loginpage}
                  style={{ width: '350px', height: '350px' }}
                  className='d-block mx-lg-auto img-fluid img-thumbnail rounded'
                  alt='Login Page'
                  loading='lazy'
                />
              </Link>
            </div>
            <div className='col-lg-6'>
              <Link
                to='/practice/loginpage'
                className='text-decoration-none'
                target='_blank'
              >
                <h1 className='display-5 fw-bold text-body text-body-emphasis lh-1 mb-3'>
                  Login Page
                </h1>
              </Link>
              <p className='lead'>
                A Simple Login Page: I've developed test cases and automated
                testing using renowned tools. Access the page via this{' '}
                <Link
                  target='_blank'
                  to='/testing/loginpage'
                  className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                >
                  link
                </Link>
                , and explore the GitHub repositories and code below.
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <a
                  href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                >
                  Cypress
                </a>

                {/* <button
                  type='button'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                >
                  Selenium
                </button>
                <button
                  type='button'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                >
                  Playwright
                </button> */}
              </div>
            </div>
          </div>
          {/* E-commerce Section */}
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <img
                src={ecommerce}
                style={{ width: '350px', height: '350px' }}
                className='d-block mx-lg-auto img-fluid img-thumbnail rounded'
                alt='E-commerce'
                loading='lazy'
              />
            </div>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
                E-Commerce
              </h1>
              <p className='lead'>
                I developed an e-commerce page for my frontend program's final
                project, which serves as a demo available via this{' '}
                <a
                  href='https://ayhando.vercel.app/'
                  className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                  target='_blank'
                >
                  link
                </a>
                . Additionally, I created test cases and automated them using
                popular tools. You can access the page and explore the GitHub
                repositories and code below.
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                  target='_blank'
                >
                  Cypress
                </button>
                {/* <button
                  type='button'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                  target='_blank'
                >
                  Selenium
                </button>
                <button
                  type='button'
                  className='btn btn-outline-warning btn-sm px-4 me-md-2'
                  target='_blank'
                >
                  Playwright
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
