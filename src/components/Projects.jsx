import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      <div className='container mb-2 pb-3 pt-0'>
        <h3 className='pb-4 mb-1 border-bottom text-center'>Projects</h3>
        <div className='container col-xxl-8 px-4 py-5 pt-4'>
          {projects.map(project => (
            <div key={project.id} className='row align-items-center g-5 py-5'>
              <div className='col-10 col-sm-8 col-lg-6'>
                <Link to={`/projects/${project.id}`} target='_blank'>
                  <img
                    src={project.imageUrl}
                    style={{ width: '250px', height: '250px' }}
                    className='d-block mx-lg-auto img-fluid img-thumbnail rounded'
                    alt={project.name}
                    loading='lazy'
                  />
                </Link>
              </div>
              <div className='col-lg-6'>
                <h1 className='display-5 fs-2 text fw-bold text-body mb-4 lh-1 mb-3'>
                  {project.name}
                </h1>
                <p className='lead fs-5 text'>
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
