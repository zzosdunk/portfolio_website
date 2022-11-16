import PropTypes from "prop-types";
import "./SkillItem.css";

function SkillItem({ skillName, skillIconPath }) {
    return (
        <div className="dz__tooltip">
            <span className="dz__tooltipText">{skillName}</span>
            <img src={skillIconPath} alt={skillName} />
        </div>
    );
}

SkillItem.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillIconPath: PropTypes.string.isRequired,
};

export default SkillItem;
