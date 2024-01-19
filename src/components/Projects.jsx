import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <>
      <h3 className="pb-4 mb-4 border-bottom text-center">Projects</h3>{" "}
      <div className="row m-0 p-0 row-cols-1 row-cols-md-4 g-4">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <div className="card py-3 border border-success border-2 border-opacity-25">
              <img
                src={project.imageUrl}
                onClick={() => window.open(project.liveDemoUrl, "_blank")}
                className="card-img-top img-thumbnail p-3 shadow-lg"
                alt={project.name}
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <div className="card-body text-center p-1">
                <div className="m-2">
                  <h5 className="card-title">{project.name}</h5>
                </div>
                <p className="card-text m-0 p-0">
                  {project.technologies.join(" · ")}
                </p>
                <div className="mt-1">
                  <a
                    className="mt-4 p-0 shadow-sm link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                    target="_blank"
                    href={project.liveDemoUrl}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
