import { styled } from "@mui/material";

export const SkillsStyled = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "4rem 6rem",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const SkillsListStyled = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    padding: "2rem",
    marginBottom: "20px",
    borderRadius: "1rem",
    background: "linear-gradient(103.22deg, #ff4d71 15.86%, #22edfb 99.55%)",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 1rem",
        boxSizing: "border-box",
        width: "10%",
    },
    "& div img": {
        width: "60px",
        height: "60px",
        transition: "all 0.2s ease-in-out",
    },
    "& div img:hover": {
        transform: "translateY(10%) scale(1.4)",
    },
    "@media (max-width: 900px)": {
        "& div": {
            width: "33.33%",
        },
    },
    "@media (max-width: 400px)": {
        "& div": {
            width: "100%",
        },
    },
});
