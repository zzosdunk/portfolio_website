/* eslint-disable */

import { styled } from "@mui/material";

export const ContactFormStyled = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    background: theme.palette.mode === "dark" ? "#22edfb" : "#ff4d71",
    borderRadius: "9px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
    },
}));

export const Form = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    inset: "2px",
    padding: "10px 40px",
    zIndex: "10",
    borderRadius: "8px",
    justifyContent: "center",
    background:
        theme.palette.mode === "dark"
            ? "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)"
            : "radial-gradient(circle at 30% -100%, #22edfb 25%, #22edfb 85%, #0b75a7 100%)",

    "& h2": {
        color: "#45f3ff",
        fontWeight: "500",
        textAlign: "center",
        letterSpacing: "0.1em",
    },
    [theme.breakpoints.down("md")]: {
        position: "relative",
        padding: "40px 40px",
        zIndex: "10",
        inset: "0",
        margin: "1px",
    },
}));

export const Login = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& input": {
        flex: "2",
        width: "100%",
        minHeight: "45px",
        fontFamily: "var(--font-family)",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "28px",
        background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
        border:
            theme.palette.mode === "dark"
                ? "2px solid #22edfb"
                : "2px solid #0b75a7",
        padding: "0 1rem",
        outline: "none",
        color: theme.palette.mode === "dark" ? "#fff" : "#042c54",
        margin: "1rem 0 1rem",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
    },
    "& h1": {
        marginBottom: "3rem",
        lineBreak: "anywhere",
        fontSize: "24px",
    },
    "& textarea": {
        width: "100%",
        height: "120px",
        fontFamily: "var(--font-family)",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "28px",
        background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
        border:
            theme.palette.mode === "dark"
                ? "2px solid #22edfb"
                : "2px solid #0b75a7",
        padding: "1rem 1rem",
        outline: "none",
        color: theme.palette.mode === "dark" ? "#fff" : "#042c54",
        margin: "1rem 0 1rem",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
    },
    "& p": {
        margin: "0 1rem",
        fontSize: "0.75em",
        color: "#ff4820",
    },
}));

export const SendButton = styled("button")({
    width: "100%",
    height: "60px",
    fontFamily: "var(--font-family)",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    background: "#ff4d71",
    border: "2px solid #ff4820",
    padding: "0 1rem",
    color: "#fff",
    cursor: "pointer",
    outline: "none",
    margin: "1rem 0",
    borderRadius: "5px",
    "&:disabled, &:disabled:hover, &:disabled:active": {
        backgroundColor: "#ccc",
        color: "#292929",
        borderColor: "#ccc",
        cursor: "not-allowed",
    },
});

export const Links = styled("div")({
    display: "flex",
    justifyContent: "space-between",
});
