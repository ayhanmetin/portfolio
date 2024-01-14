import React from 'react';

export default function Skills() {
  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-header'>
            <h2 className='fs-5'>Technologies</h2>
          </div>
          <div className='card-body'>
            <div className='d-flex flex-wrap gap-2'>
              {/* Technology badges */}
              {['React', 'JavaScript', 'TypeScript', 'Git', 'Python', 'SQL', 'PostgreSQL', 'Java', 'Node.js', 'Bootstrap', 'Tailwind'].map((tech) => (
                <span key={tech} className='badge bg-primary'>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='card mt-3'>
          <div className='card-header'>
            <h2 className='fs-5'>Testing Tools</h2>
          </div>
          <div className='card-body'>
            <div className='d-flex flex-wrap gap-2'>
              {/* Testing tools badges */}
              {['Cypress', 'Selenium', 'Playwright', 'Jest', 'Pytest', 'Puppeteer', 'Postman', 'Jira', 'Testrail', 'Figma'].map((tool) => (
                <span key={tool} className='badge bg-secondary'>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='card mt-3'>
          <div className='card-header'>
            <h2 className='fs-5'>Certificates</h2>
          </div>
          <div className='card-body'>
            <div className='d-flex flex-wrap gap-2'>
              {/* Certificate badges */}
              {['ISTQB® Foundation Level', 'PSM I, Scrum.org', 'Postman API Expert', 'Cypress End-to-End Testing'].map((certificate) => (
                <span key={certificate} className='badge bg-success'>{certificate}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
