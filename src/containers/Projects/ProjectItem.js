import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Fade from "@mui/material/Fade";
import { TooltipStyled } from "../../components/skills/SkillItem.styles";

import {
    ContainerProject,
    ProjectImage,
    ProjectImageCover,
    ProjectStatus,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    ProjectTimeperiod,
} from "./ProjectItem.styles";

import star from "../../assets/star-leader.png";

function ProjectItem({
    imgUrl,
    leaderStatus,
    date,
    text,
    description,
    translationID,
}) {
    return (
        <ContainerProject>
            <ProjectImage>
                <ProjectImageCover src={imgUrl} alt="project_image" />
                {leaderStatus && (
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
                <div>
                    <ProjectTimeperiod component="p">{date}</ProjectTimeperiod>
                    <ProjectTitle component="h2">{text}</ProjectTitle>
                    <ProjectDescription component="p">
                        <FormattedMessage
                            id={`${translationID}.text`}
                            defaultMessage="{projectDescription}"
                            description="Project Description"
                            values={{
                                projectDescription: description,
                            }}
                        />
                    </ProjectDescription>
                </div>
            </ProjectContent>
        </ContainerProject>
    );
}

ProjectItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    leaderStatus: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    translationID: PropTypes.string.isRequired,
};

export default ProjectItem;
