/* eslint-disable */

import { styled } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const LanguageIconStyled = styled(LanguageIcon)({
    transition: "transform 0.1s ease-in-out",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.3)",
    },
});
