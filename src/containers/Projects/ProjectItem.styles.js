/* eslint-disable */

import { styled, Typography } from "@mui/material";

export const ContainerProject = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
}));

export const ProjectImage = styled("div")({
    width: "100%",
    height: "80%",
    background: "#040c18",
});

export const ProjectImageCover = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    background: "#040c18",
});

export const ProjectStatus = styled("img")({
    position: "absolute",
    top: "5px",
    right: "5px",
    width: "40px",
    height: "40px",
});

export const ProjectContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem 1.5rem",
    height: "100%",
});

export const ProjectTitle = styled(Typography)(({ theme }) => ({
    fontSize: "25.11px",
    fontWeight: "800",
    lineHeight: "30.3px",
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        lineHeight: "25px",
    },
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "24px",
    color: theme.palette.mode === "dark" ? "#fff" : "#042c54",
}));

export const ProjectTimeperiod = styled(Typography)({
    fontSize: "12px",
    fontWeight: "300",
    marginBottom: "10px",
    letterSpacing: "2px",
});
