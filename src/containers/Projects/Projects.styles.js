import { styled } from "@mui/material";

export const ProjectsStyled = styled("div")(({ theme }) => ({
    isplay: "flex",
    flexDirection: "column",
    padding: "4rem 6rem",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const BlogContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
    },
}));
