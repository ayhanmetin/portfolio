import React from 'react';
import writings from '../data/writings';
import githubTesting from '../data/githubTesting';
import testRail from '../images/Testrail.pdf';
export default function Home() {
  return (
    <div className='container mb-5 pb-5pt-4'>
      <h3 className='pb-4 border-bottom pb-2 mb-4 text-center'>Welcome !</h3>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h5 className='mt-4 mb-3 fw-bold'>Experience and Expertise</h5>
          <p>
            I'm passionate about web applications, AI technologies, and agile
            methodologies. Feel free to connect with me on
            <a
              href='https://www.linkedin.com/in/ayhanmet/'
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
            >
              LinkedIn
            </a>
            .
          </p>

          <p>
            I bring years of experience in online sales, excelling in SEO and
            creating compelling tech product content. I've improved user
            experiences on e-commerce platforms through detailed A/B testing. I
            have recently developed a comprehensive website for
            <a
              href='https://www.birsasigorta.com.tr'
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
            >
              Birsa Insurance
            </a>
            .
          </p>
          <p>
            I hold{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='https://app.diplomasafe.com/en-US/diploma/d0d77fac49d393835a5ae1637c369ed34cb2f33c1'
            >
              ISTQB Foundation Level,
            </a>{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='https://www.scrum.org/user/1181897'
            >
              Scrum Master (PSM I)
            </a>{' '}
            , and{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href={testRail}
            >
              Testrail.
            </a>{' '}
            I complete the{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='https://badgr.com/public/assertions/NKCaUBU5QwOJ-WrFV2hsRA?identity__email=ayhanmet2@gmail.com'
            >
              Postman API expert program
            </a>
            . Additionally, I am proficient with variety of testing tools such
            as Appium, Playwright, among others.
          </p>
          <h5 className='mt-4 mb-3 fw-bold'>Automation Practice</h5>
          <p>
            Discover
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='/testing'
            >
              my portfolio
            </a>{' '}
            of{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='/testing/ecommerce'
            >
              e-commerce website testing
            </a>{' '}
            and{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='/testing/loginpage'
            >
              login page exercises
            </a>{' '}
            showcasing detailed tutorials on Cypress. Visit my GitHub
            repositories for{' '}
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
            >
              e-commerce page testing
            </a>{' '}
            and
            <a
              target='_blank'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-1'
              href='https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main?tab=readme-ov-file#readme'
            >
              login page testing
            </a>{' '}
            to explore the codes.
          </p>

          <h5 className='mt-4 mb-3 fw-bold'>Articles</h5>
          <p>
            Dive into my articles where I explore various aspects of test
            automation, development, and the latest in technology.
          </p>
          <ul className='list-unstyled'>
            {writings.map((writing, index) => (
              <li key={index} className='mb-2'>
                <a
                  href={writing.link}
                  target='_blank'
                  className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
                >
                  - {writing.title}
                </a>
              </li>
            ))}
          </ul>

          <h5 className='mt-4 mb-3 fw-bold'>Beyond Test Automation</h5>
          <p>
            Explore the projects I've created using React, JavaScript,
            Bootstrap, Tailwind, and OpenAI API. Visit the{' '}
            <a
              href='/projects'
              className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
            >
              projects page
            </a>{' '}
            for more.
          </p>

          <h5 className='mt-4 mb-3 fw-bold'>Looking Ahead</h5>
          <p>
            I am always eager to connect with fellow tech enthusiasts and
            professionals. Contact me to share insights or discuss the latest
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
