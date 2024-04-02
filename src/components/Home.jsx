import React from 'react';
import writings from '../data/writings';
import "./home.css"
export default function Home() {
  return (
    <div className='container body mb-5 pb-5 pt-4'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          <h5 className='mt-2 mb-3 fw-bold title'>Experience and Expertise</h5>
          <p className='paragraph'>
            I'm passionate about web applications, AI technologies, and agile
            methodologies. Feel free to connect with me on
            <a
              href='https://www.linkedin.com/in/ayhanmet/'
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              LinkedIn
            </a>
            .
          </p>
          <p className='paragraph'>
            I hold{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='https://app.diplomasafe.com/en-US/diploma/d0d77fac49d393835a5ae1637c369ed34cb2f33c1'
            >
              ISTQB Foundation Level,
            </a>{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='https://www.scrum.org/user/1181897'
            >
              Scrum Master (PSM I)
            </a>
            . I complete the{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='https://badgr.com/public/assertions/NKCaUBU5QwOJ-WrFV2hsRA?identity__email=ayhanmet2@gmail.com'
            >
              Postman API expert program
            </a>
            . Additionally, I am proficient with variety of testing tools such
            as Cypress, Selenium, Playwright, and among others.
          </p>
          <h5 className='mt-4 mb-3 fw-bold title'>Automation Practice</h5>
          <p className='paragraph'>
            Discover
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='/testing'
            >
              my portfolio
            </a>{' '}
            of{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='/testing/ecommerce'
            >
              e-commerce website testing
            </a>{' '}
            and{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='/testing/loginpage'
            >
              login page exercises
            </a>{' '}
            showcasing detailed tutorials on Cypress. Visit my GitHub
            repositories for{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
            >
              e-commerce page testing
            </a>{' '}
            and
            <a
              target='_blank'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
            >
              login page testing
            </a>{' '}
            to explore the codes.
          </p>

          <h5 className='mt-4 mb-3 fw-bold title'>Articles</h5>
          <p className='paragraph'>
            Dive into my articles where I explore various aspects of test
            automation, development, and the latest in technology.
          </p>
          <ul className='list-unstyled'>
            {writings.map((writing, index) => (
              <li key={index} className='mb-2'>
                <a
                  href={writing.link}
                  target='_blank'
                  className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >
                  - {writing.title}
                </a>
              </li>
            ))}
          </ul>

          <h5 className='mt-4 mb-3 fw-bold title'>Beyond Test Automation</h5>
          <p className='paragraph'>
            Explore the projects I've created using React, JavaScript,
            Bootstrap, Tailwind, and OpenAI API. Visit the{' '}
            <a
              href='/projects'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              projects page
            </a>{' '}
            for more.
          </p>

          <h5 className='mt-4 mb-3 fw-bold title'>Looking Ahead</h5>
          <p className='paragraph'>
            I am always eager to connect with fellow tech enthusiasts and
            professionals. Contact me to share insights or discuss the latest
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
