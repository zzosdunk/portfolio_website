/* eslint-disable */

import PropTypes from "prop-types";

import Fade from "@mui/material/Fade";
// import { SkillTooltip } from "./SkillItem.styles";
import Tooltip from "@mui/material/Tooltip";

function SkillItem({ skillName, skillIconPath }) {
    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 400 }}
            title={skillName}
            placement="top"
        >
            <img src={skillIconPath} alt={skillName} />
        </Tooltip>
    );
}

SkillItem.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillIconPath: PropTypes.string.isRequired,
};

export default SkillItem;
