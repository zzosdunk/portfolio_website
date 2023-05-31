import PropTypes from "prop-types";

import Fade from "@mui/material/Fade";

import { TooltipStyled } from "./SkillItem.styles";

function SkillItem({ skillName, skillIconPath }) {
    return (
        <TooltipStyled
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 400 }}
            title={skillName}
            placement="top"
        >
            <img src={skillIconPath} alt={skillName} />
        </TooltipStyled>
    );
}

SkillItem.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillIconPath: PropTypes.string.isRequired,
};

export default SkillItem;
