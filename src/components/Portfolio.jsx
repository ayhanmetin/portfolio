import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../projects';
import './gradient.css';

function Portfolio() {
  return (
    <>
      <div className='container'>
        <header className='name'>
          <p class='text-start'>Projects I'm proud of</p>
        </header>
        <hr className='featurette-divider mb-3'></hr>
        <div className='container ms-1 p-1 mt-4'>
          <div className='row row-cols-1 row-cols-md-6 g-4'>
            {projects.map((project, index) => (
              <div key={index} className='col'>
                <div className='position-relative'>
                  <a
                    href={project.liveDemoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link-offset-2 link-underline-opacity-0'
                  >
                    <img
                      src={project.imageUrl}
                      className='imageLoad img-fluid border border-primary border-1'
                      alt={project.name}
                    />
                  </a>
                  <div className='imageLoad bg-primary position-absolute bottom-0 start-0'>
                    <div
                      className='text-white'
                      style={{
                        width: '100%',
                        paddingBottom: '1px',
                        marginBottom: '1px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                      }}
                    >
                      <h3
                        className=' p-1 text '
                        style={{ marginBottom: '2px', fontSize: '12px' }}
                      >
                        <a
                          href={project.liveDemoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='link-light p-1 link-offset-2 link-underline-opacity-0'
                        >
                          {project.name}
                        </a>
                      </h3>
                      <p style={{ marginBottom: '0' }}>{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-row mb-3 align-items-center'>
                  <figure className='figure p-2'>
                    <figcaption className='figure-caption'>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-7 text'
                      >
                        github
                      </a>
                    </figcaption>
                  </figure>
                  <figure className='figure p-2'>
                    <figcaption className='figure-caption'>
                      <a
                        href={project.liveDemoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-7 text'
                      >
                        live demo
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
