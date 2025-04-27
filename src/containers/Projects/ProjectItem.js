import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Fade from "@mui/material/Fade";
import { TooltipStyled } from "../../components/skills/SkillItem.styles";
import LearnMoreSmallButton from "../../components/Buttons/LearnMoreSmallButton";

import {
    ContainerProject,
    ProjectImage,
    ProjectImageCover,
    ProjectStatus,
    ProjectContent,
    ProjectHeader,
    ProjectTitle,
    ProjectTimeperiod,
    ProjectDescription,
} from "./ProjectItem.styles";

import star from "../../assets/star-leader.png";

function ProjectItem({ project }) {
    return (
        <ContainerProject>
            <ProjectImage>
                <ProjectImageCover src={project.imgUrl} alt="project_image" />
                {project.leaderStatus && (
                    <TooltipStyled
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 400 }}
                        title="Project Leader"
                        placement="top"
                    >
                        <ProjectStatus src={star} alt="project-leader" />
                    </TooltipStyled>
                )}
            </ProjectImage>
            <ProjectContent>
                <ProjectHeader>
                    <ProjectTimeperiod component="p">
                        {project.timeperiod}
                    </ProjectTimeperiod>

                    <LearnMoreSmallButton link={project.url} />
                </ProjectHeader>
                <ProjectTitle component="h2">{project.name}</ProjectTitle>
                <ProjectDescription component="p">
                    <FormattedMessage
                        id={`${project.translationID}.text`}
                        defaultMessage="{projectDescription}"
                        description="Project Description"
                        values={{
                            projectDescription: project.description,
                        }}
                    />
                </ProjectDescription>
            </ProjectContent>
        </ContainerProject>
    );
}

ProjectItem.propTypes = {
    project: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        leaderStatus: PropTypes.bool.isRequired,
        timeperiod: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        translationID: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectItem;
