import React from 'react';
import writings from '../data/writings';
import './home.css';
import jira from '../images/jira.png';
import Testrail from "../images/Testrail.png"
import cypress from "../images/cypress.png"


export default function Home() {
  return (
    <div className='container body mb-5 pb-5 pt-4'>
      <div className='row justify-content-center'>
        <div className='col-lg-7'>
          <h5 className='mt-2 mb-3 fw-bold title'>Experience and Expertise</h5>
          <p className='paragraph'>
            I have a deep interest in web applications, ensuring software
            quality, AI technologies, and agile practices. Feel free to connect
            with me on
            <a
              href='https://www.linkedin.com/in/ayhanmet/'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              LinkedIn
            </a>
            , and you can reach my projects on
            <a
              href='https://github.com/ayhanmetin'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              Github
            </a>
            .
          </p>
          <p className='paragraph'>
            I hold{' '}
            <a
              href='https://app.diplomasafe.com/en-US/diploma/d0d77fac49d393835a5ae1637c369ed34cb2f33c1'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              ISTQB Foundation Level,
            </a>{' '}
            <a
              href='https://www.scrum.org/user/1181897'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              Scrum Master (PSM I),
            </a>{' '}
            and I've completed the{' '}
            <a
              href='https://badgr.com/public/assertions/NKCaUBU5QwOJ-WrFV2hsRA?identity__email=ayhanmet2@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              Postman API Expert program,
            </a>{' '}
            and {' '}
            <a
              href={cypress}
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              Cypress
            </a>{' '}
            course. I'm also certified in{' '}
            <a
              href={jira}
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              Jira
            </a>{' '}
            and{' '}
            <a
              href={Testrail}
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
            >
              Testrail
            </a>{' '}
            through their official education programs, expanding my toolkit for
            effectively managing and executing tests.
            <br />
            <br />I currently reside in the vibrant city of Frankfurt am Main.
            Fluent in both English and Turkish at a professional level, I am
            actively improving my German at the Goethe Institut, currently at B1
            level.
          </p>
          <h5 className='mt-4 mb-3 fw-bold title'>Test Automation Projects</h5>
          <p className='paragraph'>
            Discover
            <a
              href='/testing'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              my portfolio
            </a>{' '}
            of{' '}
            <a
              href='/testing/ecommerce'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              e-commerce website testing
            </a>{' '}
            and{' '}
            <a
              href='/testing/loginpage'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              login page exercises
            </a>{' '}
            showcasing detailed tutorials on Cypress. Visit my GitHub
            repositories for{' '}
            <a
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              e-commerce page testing
            </a>{' '}
            and
            <a
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
              target='_blank'
              rel='noopener noreferrer'
              className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ms-1'
            >
              login page testing
            </a>{' '}
            to explore the codes.
          </p>

          <h5 className='mt-4 mb-3 fw-bold title'>Frontend Projects</h5>
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
                  rel='noopener noreferrer'
                  className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >
                  - {writing.title}
                </a>
              </li>
            ))}
          </ul>

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
