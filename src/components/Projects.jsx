import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      <div className='container mb-2 pb-3 pt-0'>
        <div className='container col-xxl-8 px-4 py-5 pt-4'>
          {projects.map(project => (
            <div key={project.id} className='row align-items-center g-5 py-5'>
              <div className='col-10 col-sm-8 col-lg-6'>
                <Link to={project.liveDemoUrl} target='_blank'>
                  <img
                    src={project.imageUrl}
                    style={{
                      width: '270px',
                      height: '270px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    className='d-block mx-lg-auto img-fluid img-thumbnail p-2 rounded shadow'
                    alt={project.name}
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
                <h1 className='display-5 fs-2 text-muted text fw-bold text-body mb-4 lh-1 mb-3'>
                  {project.name}
                </h1>
                <p className='lead fs-6 fw-normal text'>
                  {project.description}
                </p>
                <p className='fst-italic small'>
                  Technologies: {project.technologies.join(', ')}
                </p>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >
                  GitHub Repository
                </a>
                {' | '}
                <a
                  href={project.liveDemoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-body-emphasis link-underline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
