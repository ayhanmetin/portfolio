import React from 'react';
import loginpage from '../images/loginpage.png';
import ecommerce from '../images/ecommerce.png';
import todolist from '../images/todolist.png';

export default function Test() {
  return (
    <>
      <div className='container col-xxl-8 px-4 py-5'>
        {/* Login Page Section */}
        <div className='row align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src={loginpage}
              style={{ width: '350px', height: '350px' }}
              className='d-block mx-lg-auto img-fluid img-thumbnail rounded'
              alt='Login Page'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
              Login Page Exercises
            </h1>
            <p className='lead'>
              A Simple Login Page: I've developed test cases and automated
              testing using renowned tools. Access the page via this{' '}
              <a href='#' className='link-underline-warning'>
                link
              </a>
              , and explore the GitHub repositories and code below.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Cypress
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Selenium
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Playwright
              </button>
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
              E-commerce Exercises
            </h1>
            <p className='lead'>
              I developed an e-commerce page for my frontend program's final
              project, which serves as a demo (available{' '}
              <a
                href='https://ayhando-ecommerce.vercel.app/'
                className='link-underline-warning'
              >
                here
              </a>
              ). Additionally, I created test cases and automated them using
              popular tools. You can access the page and explore the GitHub
              repositories and code below.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Cypress
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Selenium
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Playwright
              </button>
            </div>
          </div>
        </div>

        {/* To-do List Section */}
        <div className='row align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src={todolist}
              style={{ width: '350px', height: '350px' }}
              className='d-block mx-lg-auto img-fluid img-thumbnail rounded'
              alt='To-do List'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
              To-do List Exercises
            </h1>
            <p className='lead'>
              As part of my learning project, I developed a To-Do List using
              React. Additionally, I created test cases and automated them using
              popular tools. You can access the tool available{' '}
              <a
                href='https://project-management-one-amber.vercel.app/'
                className='link-underline-warning'
              >
                here
              </a>
              , and explore the GitHub repositories and code below.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Cypress
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Selenium
              </button>
              <button
                type='button'
                className='btn btn-outline-primary btn-sm px-4 me-md-2'
              >
                Playwright
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
