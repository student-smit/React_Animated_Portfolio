import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 mx-5 col-sm-6 col-md-4  col-12"
              >
                <div
                  className="card bg-dark text-light text-center"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="image d-flex justify-content-space-between p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="card"
                      style={{
                        width: "250px",
                        height: "200px",
                        borderRadius: "10px",
                        border: "1px solid yellow",
                        boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-2">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
