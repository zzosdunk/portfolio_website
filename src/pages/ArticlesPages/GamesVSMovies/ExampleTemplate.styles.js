/* eslint-disable import/prefer-default-export */
import { styled, Typography } from "@mui/material";

export const TitleStyled = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: theme.palette.mode === "dark" ? "#22b6fbaf" : "#031b34",
}));

export const DescriptionStyled = styled(Typography)({
    margin: "10px 0",
});
