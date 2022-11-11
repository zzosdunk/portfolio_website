import PropTypes from "prop-types";
import "./ProjectItem.css";
import { FormattedMessage } from "react-intl";
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
    <div className="dz__blog-container_article">
      <div className="dz__blog-container_article-image">
        <span className="dz__tooltipText">Project Leader</span>
        <img
          className="dz__project-container_article-image-cover"
          src={imgUrl}
          alt="project_image"
        />
        {leaderStatus && (
          <img className="dz__project-status" src={star} alt="project-leader" />
        )}
      </div>
      <div className="dz__blog-container_article-content">
        <div>
          <p className="dz__project-timeperiod">{date}</p>
          <h3>{text}</h3>
          <p className="dz__project-description">
            <FormattedMessage
              id={`${translationID}.text`}
              defaultMessage="{projectDescription}"
              description="Project Description"
              values={{
                projectDescription: description,
              }}
            />
          </p>
        </div>
      </div>
    </div>
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
