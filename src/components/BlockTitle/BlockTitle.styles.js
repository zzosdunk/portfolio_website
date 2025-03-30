import { styled } from "@mui/material";

export const Feature = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: "1rem 0",
    [theme.breakpoints.down("md")]: {
        margin: "0 0 1rem 0",
        padding: "0 2rem",
    },
}));

export const Title = styled("div")(({ theme }) => ({
    flex: "0 1 auto",
    textAlign: "center",
    margin: "2rem 0",
    "& h1": {
        fontFamily: "var(--font-family)",
        fontWeight: "900",
        fontSize: "24px",
        lineHeight: "24px",
        letterSpacing: "0.3em",
        color: "#fff",
        textShadow:
            theme.palette.mode === "dark"
                ? "2px 2px 4px #ff4d71"
                : "2px 2px 4px #22edfb",
    },
    "& div": {
        width: "100%",
        height: "3px",
        background:
            "linear-gradient(103.22deg, #ff4d71 15.86%, #22edfb 99.55%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "1rem",
    },
    [theme.breakpoints.down("md")]: {
        "& h1": {
            fontSize: "14px",
            lineHeight: "22px",
        },
    },
}));
