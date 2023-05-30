/* eslint-disable */

import { styled, Typography } from "@mui/material";

export const FooterStyled = styled("div")(({ theme }) => ({
    display: "flex",
    padding: "4rem 6rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const HomeLink = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    "& a": {
        color: theme.palette.mode === "dark" ? "#22edfb" : "#ff4d71",
        marginBottom: "1rem",
        transition: "transform 0.3s ease",
    },
    "& a:hover": {
        transform: "translateY(-20%)",
    },
}));

export const Links = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    "& div": {
        width: "250px",
        margin: "1rem",
    },
});

export const Socials = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 2rem",
    "& img": {
        width: "50px",
        height: "50px",
        margin: "0.5rem 0",
        cursor: "pointer",
        transition: "transform 0.15s ease",
    },
    "& img:hover": {
        transform: "translateY(-20%)",
    },
    [theme.breakpoints.down(350)]: {
        margin: "1rem 0",
        flexDirection: "column",
        alignItems: "center",
    },
}));

export const Copyright = styled("div")({
    margin: "2rem 0",
    textAlign: "center",
    width: "100%",
});

export const CopyrightDate = styled(Typography)({
    fontSize: "12px",
    lineHeight: "15px",
});
