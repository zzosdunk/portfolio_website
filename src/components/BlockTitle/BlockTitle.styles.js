/* eslint-disable */

import { styled } from "@mui/material";

export const Feature = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    margin: "1rem 0",
    [theme.breakpoints.down("md")]: {
        margin: "0 0 1rem 0",
        padding: "0 2rem",
    },
}));

export const Title = styled("div")(({ theme }) => ({
    flex: "1",
    maxWidth: "180px",
    marginRight: "2rem",
    "& h1": {
        fontFamily: "var(--font-family)",
        fontWeight: "800",
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "-0.04em",
        color: "#fff",
    },
    "& div": {
        width: "100px",
        height: "3px",
        background: "var(--gradient-bar)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("md")]: {
        "& h1": {
            fontSize: "14px",
            lineHeight: "22px",
        },
    },
}));
