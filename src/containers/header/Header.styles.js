/* eslint-disable */

import { styled } from "@mui/material";

export const HeaderStyled = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: "4rem 6rem",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        padding: "0 2rem",
    },
}));

export const Content = styled("div")(({ theme }) => ({
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginRight: "5rem",
    [theme.breakpoints.down("md")]: {
        margin: "0",
    },
}));

export const HeaderImage = styled("div")({
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
        width: "100%",
        height: "100%",
    },
});
