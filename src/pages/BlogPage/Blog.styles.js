/* eslint-disable import/prefer-default-export */
import { styled } from "@mui/material";

export const CardStyled = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const DescriptionStyled = styled("div")(({ theme }) => ({
    position: "relative",
    maxHeight: 60,
    overflow: "hidden",
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const ArticleStyled = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));
