import React from "react";
import "./SkillItem.css";

const SkillItem = (props) => {
  return (
    <React.Fragment>
      <div className="dz__tooltip">
        <span className="dz__tooltipText">{props.skillName}</span>
        <img src={props.skillIconPath} alt={props.skillName}></img>
      </div>
    </React.Fragment>
  );
};

export default SkillItem;
