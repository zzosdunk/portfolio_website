import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import useHttp from "../../hooks/use-http";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

function Projects() {
    const [projects, setProjects] = useState([]);

    const { sendRequest: fetchProjects, isLoading } = useHttp();

    useEffect(() => {
        const transformProjects = (projectObj) => {
            const loadedObjects = Object.entries(projectObj).map(
                ([key, value]) => ({
                    id: key,
                    name: value.name,
                    description: value.description,
                    link: value.link,
                    logo: value.logo,
                    timeperiod: value.timeperiod,
                    leader: value.leader,
                    translationID: value.translationID,
                })
            );

            setProjects(loadedObjects);
        };

        fetchProjects(
            {
                url: "https://react-http-bcb91-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
            },
            // eslint-disable-next-line prettier/prettier
            transformProjects
        );
    }, [fetchProjects]);

    return (
        <div className="dz__blog section__padding" id="projects">
            <BlockTitle translationID="projectsBlockTitle" title="PROJECTS" />

            <div className="dz__blog-container">
                <div className="dz__blog-container_groupB">
                    {!isLoading &&
                        projects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                imgUrl={project.logo}
                                date={project.timeperiod}
                                text={project.name}
                                description={project.description}
                                leaderStatus={project.leader}
                                translationID={project.translationID}
                            />
                        ))}
                    {isLoading && (
                        <BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="#ff4d71"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            // eslint-disable-next-line react/jsx-boolean-value
                            visible={true}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
