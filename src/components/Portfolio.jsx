import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../projects';
import './gradient.css';

function Portfolio() {
  return (
    <>
      <div
        className="container"
        style={{
          marginLeft: 'calc(var(--bs-gutter-x) * 7)',
          marginTop: '1.5rem',
        }}
      >
        <header className="name">
          <p className="text-start mb-0 pt-2 mt-5 border-start ps-3 mb-5 p-1 border-5 border-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            explicabo totam, beatae dolores iure aperiam rerum veritatis dolore
          </p>
        </header>
        <div className="mt-2 text-with-gradient">Projects I'm proud of</div>

        <div className="container p-1 mt-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {projects.map((project, index) => (
              <div key={index} className="col">
                <div className="position-relative">
                  <img
                    src={project.imageUrl}
                    className="img-fluid border border-primary-subtle border-5"
                    alt={project.name}
                  />
                  <div className="bg-primary-subtle position-absolute bottom-0 start-0">
                    <div
                      className="text-white"
                      style={{
                        width: '100%',
                        paddingBottom: '1px',
                        marginBottom: '1px',
                      }}
                    >
                      <h3
                        className="fs-6 m-2 text fw-light "
                        style={{ marginBottom: '2px' }}
                      >
                        <a target='_blank' className='' href={project.liveDemoUrl}>{project.name}</a>
                      </h3>
                      <p style={{ marginBottom: '0' }}>{project.description}</p>
                    </div>
                  </div>
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
