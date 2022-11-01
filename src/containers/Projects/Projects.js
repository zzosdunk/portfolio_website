import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import useHttp from "../../hooks/use-http";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const { sendRequest: fetchProjects } = useHttp();

  useEffect(() => {
    const transformProjects = (projectObj) => {
      const loadedObjects = [];

      for (const projectKey in projectObj) {
        loadedObjects.push({
          id: projectKey,
          name: projectObj[projectKey].name,
          description: projectObj[projectKey].description,
          link: projectObj[projectKey].link,
          logo: projectObj[projectKey].logo,
          timeperiod: projectObj[projectKey].timeperiod,
          leader: projectObj[projectKey].leader,
        });
      }

      setProjects(loadedObjects);
    };

    fetchProjects(
      {
        url: "https://react-http-bcb91-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
      },
      transformProjects
    );
  }, [fetchProjects]);

  return (
    <div className="dz__blog section__padding" id="projects">
      <BlockTitle title="PROJECTS" />

      <div className="dz__blog-container">
        <div className="dz__blog-container_groupB">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              imgUrl={project.logo}
              date={project.timeperiod}
              text={project.name}
              description={project.description}
              leaderStatus={project.leader}
            />
          ))}

          {/* <Project
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Project
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Project
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Project
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Project
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Project
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
