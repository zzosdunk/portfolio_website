import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import Grid from "@mui/material/Grid";

import ProjectItem from "./ProjectItem";
import useHttp from "../../hooks/use-http";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

import { ProjectsStyled, BlogContainer } from "./Projects.styles";

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
                url: `${process.env.REACT_APP_DB_LINK}/projects.json`,
            },
            // eslint-disable-next-line prettier/prettier
            transformProjects
        );
    }, [fetchProjects]);

    return (
        <ProjectsStyled id="projects">
            <BlockTitle translationID="projectsBlockTitle" title="PROJECTS" />

            <BlogContainer>
                <Grid container spacing={2}>
                    {!isLoading &&
                        projects.map((project) => (
                            <Grid key={project.id} item xs={12} md={4}>
                                <ProjectItem
                                    imgUrl={project.logo}
                                    date={project.timeperiod}
                                    text={project.name}
                                    description={project.description}
                                    leaderStatus={project.leader}
                                    translationID={project.translationID}
                                />
                            </Grid>
                        ))}
                    {isLoading && (
                        <Grid item xs={12}>
                            <p>Loading...</p>
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
                        </Grid>
                    )}
                </Grid>
            </BlogContainer>
        </ProjectsStyled>
    );
}

export default Projects;
