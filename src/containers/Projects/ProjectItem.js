import React from "react";
import PropTypes from 'prop-types';
import "./ProjectItem.css";
import star from "../../assets/star-leader.png";

const ProjectItem = ({imgUrl, leaderStatus, date, text, description}) => (
  <div className="dz__blog-container_article">
    <div className="dz__blog-container_article-image">
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
        <p className="dz__project-description">{description}</p>
      </div>
    </div>
  </div>
);

ProjectItem.propTypes = {
  imgUrl: PropTypes.string,
  leaderStatus: PropTypes.bool,
  date: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string
}

export default ProjectItem;
