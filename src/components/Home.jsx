import React from 'react';
import writings from '../data/writings';
import githubTesting from '../data/githubTesting';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className='container mb-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h4 className='pb-2 fw-bold border-bottom'>Welcome!</h4>
          <p>
            My name is Ayhan Metin, and I specialize in test automation using tools such as Selenium WebDriver and Cypress. I'm passionate about web applications, AI technologies, and agile methodologies. For collaboration or opportunities, feel free to connect with me on
            <a href='https://www.linkedin.com/in/ayhanmet/' target='_blank' className='text-decoration-none ms-1'>LinkedIn</a>.
          </p>

          <h5 className='mt-4 mb-3 fw-bold'>Experience and Expertise</h5>
          <p>
            With years of experience in enhancing Web UIs for e-commerce platforms, I ensure optimal performance, reliability, and user experience through meticulous manual and A/B testing. My freelance projects demonstrate my capability to improve automation processes effectively. Notably, I have recently developed a comprehensive website for
            <a href='https://www.birsasigorta.com.tr' target='_blank' className='text-decoration-none ms-1'>Birsa Insurance</a>.
          </p>
          <p>I hold ISTQB Foundation Level and Scrum Master (PSM I) certifications and am part of the Postman API expert program. Additionally, I am proficient with tools like Testrail, Appium, Playwright, RestAssured, among others.</p>

          <h5 className='mt-4 mb-3 fw-bold'>Automation Practice</h5>
          <p>Discover my portfolio of webpages and exercises showcasing detailed tutorials on Cypress, Selenium, and Playwright. Visit my GitHub repositories to explore the code.</p>
          <ul className='list-unstyled'>
            {githubTesting.map((test, index) => (
              <li key={index} className='mb-2'>
                <a href={test.githubLink} target='_blank' className='text-decoration-none'>- {test.title}</a>
              </li>
            ))}
          </ul>

          <h5 className='mt-4 mb-3 fw-bold'>Articles</h5>
          <p>Dive into my articles where I explore various aspects of test automation, development, and the latest in technology.</p>
          <ul className='list-unstyled'>
            {writings.map((writing, index) => (
              <li key={index} className='mb-2'>
                <a href={writing.link} target='_blank' className='text-decoration-none'>- {writing.title}</a>
              </li>
            ))}
          </ul>

          <h5 className='mt-4 mb-3 fw-bold'>Beyond Test Automation</h5>
          <p>Explore the projects I've created using React, JavaScript, Bootstrap, Tailwind, and OpenAI API. Visit the <a href='/projects' className='text-decoration-none'>projects page</a> for more.</p>

          <h5 className='mt-4 mb-3 fw-bold'>Looking Ahead</h5>
          <p>I am always eager to connect with fellow tech enthusiasts and professionals. Contact me to share insights or discuss the latest technologies.</p>
        </div>
      </div>
    </div>
  );
}
