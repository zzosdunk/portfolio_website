import { styled, Typography } from "@mui/material";

export const ContactDescriptionStyled = styled("div")(({ theme }) => ({
    padding: "3rem",
    background:
        theme.palette.mode === "dark"
            ? "var(--color-footer)"
            : "var(--test-color)",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: "0 1rem",
    },
}));

export const HeadTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "800",
    fontSize: "32px",
    lineHeight: "75px",
    letterSpacing: "-0.04em",
    background: "var(--gradient-text)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("md")]: {
        fontWeight: "400",
        fontSize: "24px",
    },
}));

export const Description = styled(Typography)({
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    margin: "0.5rem 0",
    color: "var(--color-text)",
});

export const ContactData = styled("div")({
    display: "flex",
    flexDirection: "column",
});

export const ContactDataBlock = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    margin: "0.5rem 0",
    color: "var(--color-text)",
    "& img": {
        margin: "0 1rem",
        width: "40x",
        height: "40px",
    },
    "& a": {
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        textDecoration: "none",
    },
    [theme.breakpoints.down("md")]: {
        margin: "0.4rem 0",
    },
}));
