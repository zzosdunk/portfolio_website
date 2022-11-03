import React from "react";
import PropTypes from "prop-types";
import "./SkillItem.css";

const SkillItem = ({ skillName, skillIconPath }) => {
  return (
    <div className="dz__tooltip">
      <span className="dz__tooltipText">{skillName}</span>
      <img src={skillIconPath} alt={skillName}></img>
    </div>
  );
};

SkillItem.propTypes = {
  skillName: PropTypes.string,
  skillIconPath: PropTypes.string,
};

export default SkillItem;
