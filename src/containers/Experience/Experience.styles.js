/* eslint-disable */

import { styled } from "@mui/material";

export const ExperienceStyled = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    padding: "4rem 6rem",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const ExpListElement = styled("div")(({ theme }) => ({
    padding: "20px",
    background:
        theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #042c54 15.86%, rgba(27, 120, 222, 1) 99.55%)"
            : "linear-gradient(180deg, #0b75a7 15.86%, #22edfb 99.55%)",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px",

    [theme.breakpoints.up("md")]: {
        width: "50%",
        "&:nth-of-type(odd)": {
            float: "left",
            clear: "right",
            transform: "translateX(-30px)",
            borderRadius: "20px 0px 20px 20px",
        },
        "&:nth-of-type(even)": {
            float: "right",
            clear: "left",
            transform: "translateX(30px)",
            borderRadius: "0px 20px 20px 20px",
        },
        "&:last-child": {
            marginBottom: "0px",
        },
        "&::before": {
            content: `""`,
            position: "absolute",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "#22edfb",
            top: "0px",
        },
        "&:nth-of-type(odd)::before": {
            transform: "translate(50%, -50%)",
            right: "-30px",
        },
        "&:nth-of-type(even)::before": {
            transform: "translate(-50%, -50%)",
            left: "-30px",
        },
        "&:hover::before": {
            backgroundColor: "#ff4d71",
        },
    },

    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

export const TimelineContent = styled("div")(({ theme }) => ({
    "& p": {
        fontSize: "16px",
        lineHeight: "30px",
        fontWeight: 300,
        color: theme.palette.mode === "dark" ? "#fff" : "#042c54",
    },
    "& h2": {
        fontWeight: 500,
        fontSize: "25px",
        lineHeight: "30px",
        marginBottom: "10px",
    },
    "& .date": {
        fontSize: "12px",
        fontWeight: 300,
        marginBottom: "10px",
        letterSpacing: "2px",
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            top: "-30px",
        },
    },
}));

export const Timeline = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        width: "80%",
        height: "auto",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        "&::before": {
            content: `""`,
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "100%",
            background: "#ff4d71",
        },
        "& > ul": {
            listStyle: "none",
        },
    },

    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

export const Container = styled("div")(({ theme }) => ({
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 0",
    [theme.breakpoints.down("md")]: {
        padding: "0px",
    },
}));

export const ResponsibilityList = styled("ul")(({ theme }) => ({
    display: "block",
    padding: "0px 20px",
    [theme.breakpoints.down("md")]: {
        padding: "0px 0px 0px 20px",
    },
}));

export const ResponsibilityListElement = styled("li")(({ theme }) => ({
    display: "block",
    position: "relative",
    "&::before": {
        content: `""`,
        position: "absolute",
        top: "1.2em",
        left: "-5%",
        marginTop: "-0.6em",
        background: "#ff4d71",
        height: "10px",
        width: "10px",
        borderRadius: "50%",
    },
    [theme.breakpoints.down("md")]: {
        "&::before": {
            top: "1.2em",
            left: "-5%",
            marginTop: "-0.4rem",
            height: "5px",
            width: "5px",
        },
    },
}));
