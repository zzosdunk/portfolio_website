import { styled, Box } from "@mui/material";

export const Contact = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 6rem",
    [theme.breakpoints.down("md")]: {
        padding: "0 2rem",
    },
}));

export const ContactContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
});

export const ContactInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& > div": {
        flex: "1",
        margin: theme.spacing(1),
        [theme.breakpoints.down(850)]: {
            flexBasis: "100%",
        },
    },
}));
