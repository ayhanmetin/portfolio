import React from 'react';
import writings from '../data/writings';
import githubTesting from '../data/githubTesting';
import projects from '../data/projects';

export default function Home() {
  return (
    <>
      <div className='container mb-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h4 className='pb-2 fw-bolder'>Welcome!</h4>
            <p>
              I am Ayhan Metin, passionate about Web Applications and AI. I have
              mastered test automation using Selenium WebDriver and Cypress, and
              agile practices. Feel free to connect with me on &nbsp;
              <a
                target='_blank'
                href='https://www.linkedin.com/in/ayhanmet/'
                className='fs-7 text fw-medium link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
              >
                LinkedIn
              </a>
              &nbsp; for further discussion or opportunities.
            </p>

            <h5 className='my-4 fw-bolder'>Experience and Expertise</h5>
            <article>
              <p>
                I have years of experience in making Web UIs for e-commerce work
                better, doing manual and A/B tests to make sure they work as
                they should, are reliable, and easy to use. I've worked on many
                freelance projects and am confident in improving automation for
                your projects. Recently, I developed a website for{' '}
                <a
                  target='_blank'
                  href='https://www.birsasigorta.com.tr'
                  className='fs-7 text fw-medium link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >
                  Birsa Insurance.
                </a>
              </p>
              <p>
                I have ISTQB and Scrum Master certifications (PSM I) and also
                joined Postman API expert program. In additionaly I have
                knowledge about tools like Testrail, Appium, Playwright,
                RestAssured and more.
              </p>
              <h5 className='my-4 fw-bolder'>Automation Practice</h5>
              <p>
                Explore my collection of practical webpages and exercises,
                including detailed Cypress login page tutorials and GitHub
                repositories. Delve into my work with Selenium and Playwright,
                showcasing a range of hands-on exercises designed to enhance
                your understanding and skills.
              </p>
              <div className='container p-0 mt-4 mb-2 fs-4 text'>
                {githubTesting.map((test, index) => (
                  <div key={index}>
                    <ul>
                      <figure>
                        <blockquote className='blockquote fs-6 text'>
                          <p>
                            <a
                              className='link-body-emphasis link-offset-2 
                            link-underline-opacity-25 link-underline-opacity-75-hover'
                              target='_blank'
                              href={test.githubLink}
                            >
                              <li>{test.title}</li>
                            </a>
                          </p>
                        </blockquote>
                      </figure>
                    </ul>
                  </div>
                ))}
              </div>
              <h5 className='my-4 fw-bolder'>Articles</h5>
              <p>
                Dive into my articles where I discuss and delve deeply into
                various aspects of test automation, development, and the latest
                technological updates.
              </p>
              <div className='container p-0 mt-4 mb-2 fs-4 text'>
                {writings.map((writing, index) => (
                  <div key={index}>
                    <figure>
                      <blockquote className='blockquote fs-6 text'>
                        <p>
                          <a
                            className='link-body-emphasis link-offset-2 
                            link-underline-opacity-25 link-underline-opacity-75-hover'
                            target='_blank'
                            href={writing.link}
                          >
                            {writing.title}
                          </a>
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                ))}
              </div>
              <div></div>
              <h5 className='mt-4 fw-bolder'>Beyond Test Automation</h5>
              <p>
                Here are some of the projects I am proud of in Frontend
                Development, featuring React, JavaScript, Bootstrap, TailWind,
                and OpenAI API.
              </p>
              <div className='container p-0 mt-4 mb-5 fs-4 text'>
                {projects.map((project, index) => (
                  <div key={index}>
                    <ul>
                      <figure>
                        <blockquote className='blockquote fs-6 text'>
                          <p>
                            <a
                              className='link-body-emphasis link-offset-2 
                            link-underline-opacity-25 link-underline-opacity-75-hover'
                              target='_blank'
                              href={project.liveDemoUrl}
                            >
                              <li>{project.name}</li>
                            </a>
                          </p>
                        </blockquote>
                      </figure>
                    </ul>
                  </div>
                ))}
              </div>
              <h5 className='fw-bolder'>Looking Ahead</h5>
              <p>
                Feel free to contact me to share insights on the latest
                technologies and more.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
