import { styled, Typography } from "@mui/material";

export const ContactDescriptionStyled = styled("div")(({ theme }) => ({
    padding: "3rem",
    background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fbaf",
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
    background:
        theme.palette.mode === "dark"
            ? "linear-gradient(89.97deg, #22edfb 1.84%, #ff4d71 102.67%)"
            : "linear-gradient(89.97deg, #ff4d71 1.84%, #042c54 102.67%)",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("md")]: {
        fontWeight: "400",
        fontSize: "24px",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    margin: "0.5rem 0",
    color: theme.palette.mode === "dark" ? "#81afdd" : "#042c54",
}));

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
    color: "#81afdd",
    "& img": {
        margin: "0 1rem",
        width: "40x",
        height: "40px",
    },
    "& p": {
        color: theme.palette.mode === "dark" ? "#81afdd" : "#042c54",
    },
    "& a": {
        textDecoration: "none",
    },
    [theme.breakpoints.down("md")]: {
        margin: "0.4rem 0",
    },
}));
