import React from 'react';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      <h3 className='pb-4 mb-4 border-bottom text-center'>Projects</h3>
      <div className='row align-items-md-stretch g-4'>
        {projects.map((project, index) => (
          <div className='col-md-6' key={project.id}>
            <div className='h-100 p-4 bg-body-tertiary border rounded-3'>
              {}
              <img
                src={project.imageUrl}
                onClick={() => window.open(project.liveDemoUrl, '_blank')}
                className='img-thumbnail p-2 shadow-lg mb-4'
                alt={project.name}
                style={{
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover',
                  cursor: 'pointer', 
                }}
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p className='card-text'>
                Technologies: {project.technologies.join(' · ')}
              </p>
              <button
                className='btn btn-outline-secondary'
                onClick={() => window.open(project.liveDemoUrl, '_blank')}
              >
                Live Demo
              </button>
              <button
                className='btn btn-outline-secondary ms-3'
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                Github
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
