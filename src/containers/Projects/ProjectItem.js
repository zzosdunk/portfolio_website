import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import star from "../../assets/star-leader.png";

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
                <span className="dz__tooltipText">Project Leader</span>
                <ProjectImageCover src={imgUrl} alt="project_image" />
                {leaderStatus && (
                    <ProjectStatus src={star} alt="project-leader" />
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
