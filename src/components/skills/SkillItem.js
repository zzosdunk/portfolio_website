import React from "react";
import PropTypes from 'prop-types';
import "./SkillItem.css";

const SkillItem = ({skillName, skillIconPath}) => {
  return (
    <React.Fragment>
      <div className="dz__tooltip">
        <span className="dz__tooltipText">{skillName}</span>
        <img src={skillIconPath} alt={skillName}></img>
      </div>
    </React.Fragment>
  );
};

SkillItem.propTypes = {
  skillName: PropTypes.string,
  skillIconPath: PropTypes.string
}

export default SkillItem;
