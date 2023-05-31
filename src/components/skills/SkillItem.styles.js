/* eslint-disable */

import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material";

export const SkillTooltip = styled(Tooltip)({
    backgroundColor: "#042c54",
    color: "#22edfb",
    whiteSpace: "nowrap",
    padding: "10px 15px",
    borderRadius: "7px",
});

export const TooltipStyled = styled(({ className, ...props }) => (
    <Tooltip
        {...props}
        componentsProps={{ tooltip: { className: className } }}
    />
))(`
      color: #fff;
      background-color: #1c77df;
  `);
