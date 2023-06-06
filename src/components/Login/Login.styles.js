import { Box, styled, TextField } from "@mui/material";

export const LoginForm = styled(Box)(({ theme }) => ({
    width: "400px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        width: "200px",
        alignContent: "space-between",
    },
}));

export const Input = styled(TextField)(({ theme }) => ({
    color:
        theme.palette.mode === "dark"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
}));
